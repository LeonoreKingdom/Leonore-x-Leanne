const momentsVideoEl = document.getElementById('momentsVideo');

export function initMomentsVideo() {
  if (!momentsVideoEl) {
    return;
  }
  const source = momentsVideoEl.dataset.src;
  if (!source) {
    return;
  }

  const loadVideo = () => {
    // Check if already loaded
    if (momentsVideoEl.classList.contains('is-loaded')) {
      return;
    }

    // Set source directly - browsers handle MP4 playback natively
    // much better than manual MediaSource chunking for simple files.
    momentsVideoEl.src = source;
    momentsVideoEl.load();
    momentsVideoEl.classList.add('is-loaded');
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
      { rootMargin: '0px 0px 200px 0px' }, // Start loading when 200px away
    );
    observer.observe(momentsVideoEl);
  } else {
    loadVideo();
  }
}
