const momentsVideoEl = document.getElementById('momentsVideo');

export function initMomentsVideo() {
  if (!momentsVideoEl) {
    return;
  }
  const source = momentsVideoEl.dataset.src;
  if (!source) {
    return;
  }
  let hasLoaded = false;
  let fallbackApplied = false;
  const MIME_CODEC = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"';

  const applyFallback = () => {
    if (fallbackApplied) {
      return;
    }
    fallbackApplied = true;
    momentsVideoEl.src = source;
    momentsVideoEl.preload = 'metadata';
    momentsVideoEl.load();
  };

  const startStreaming = () => {
    if (!(window.MediaSource && MediaSource.isTypeSupported(MIME_CODEC))) {
      applyFallback();
      return;
    }
    const mediaSource = new MediaSource();
    const objectUrl = URL.createObjectURL(mediaSource);
    momentsVideoEl.src = objectUrl;
    const abortController = new AbortController();

    const revokeUrl = () => {
      try {
        URL.revokeObjectURL(objectUrl);
      } catch (error) {
        // Ignore revoke errors
      }
    };

    mediaSource.addEventListener('sourceopen', async () => {
      let sourceBuffer;
      try {
        sourceBuffer = mediaSource.addSourceBuffer(MIME_CODEC);
      } catch (error) {
        console.warn('MediaSource buffer error, using fallback video source.', error);
        revokeUrl();
        applyFallback();
        return;
      }
      try {
        const response = await fetch(source, { signal: abortController.signal });
        if (!response.ok) {
          throw new Error(`Video request failed with status ${response.status}`);
        }
        const reader = response.body?.getReader();
        if (!reader) {
          const buffer = await response.arrayBuffer();
          sourceBuffer.appendBuffer(buffer);
          sourceBuffer.addEventListener(
            'updateend',
            () => {
              if (mediaSource.readyState === 'open') {
                mediaSource.endOfStream();
              }
            },
            { once: true },
          );
          return;
        }
        const chunkQueue = [];
        let streamClosed = false;

        const appendNextChunk = () => {
          if (!chunkQueue.length) {
            if (streamClosed && mediaSource.readyState === 'open' && !sourceBuffer.updating) {
              mediaSource.endOfStream();
            }
            return;
          }
          if (sourceBuffer.updating) {
            return;
          }
          const chunk = chunkQueue.shift();
          try {
            sourceBuffer.appendBuffer(chunk);
          } catch (error) {
            console.warn('Chunk append failed, reverting to fallback video.', error);
            abortController.abort();
            applyFallback();
          }
        };

        sourceBuffer.addEventListener('updateend', appendNextChunk);

        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { value, done } = await reader.read();
          if (done) {
            streamClosed = true;
            appendNextChunk();
            break;
          }
          if (value) {
            const chunk = value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength);
            chunkQueue.push(chunk);
            appendNextChunk();
          }
        }
      } catch (error) {
        console.warn('Streaming video failed, falling back to direct source.', error);
        abortController.abort();
        revokeUrl();
        applyFallback();
      }
    });

    mediaSource.addEventListener(
      'sourceended',
      () => {
        revokeUrl();
      },
      { once: true },
    );

    momentsVideoEl.addEventListener(
      'error',
      () => {
        revokeUrl();
        applyFallback();
      },
      { once: true },
    );
  };

  const loadVideo = () => {
    if (hasLoaded) {
      return;
    }
    hasLoaded = true;
    if (momentsVideoEl.hasAttribute('data-stream-initialized')) {
      return;
    }
    momentsVideoEl.setAttribute('data-stream-initialized', 'true');
    startStreaming();
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadVideo();
            obs.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -20%' },
    );
    observer.observe(momentsVideoEl);
  } else {
    loadVideo();
  }
}
