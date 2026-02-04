import { galleryMemories } from './config.js';
import { openLightbox, findLightboxTrigger } from './lightbox.js';

const galleryGridEl = document.getElementById('galleryGrid');

export function renderGallery() {
  if (!galleryGridEl) {
    return;
  }
  galleryGridEl.innerHTML = galleryMemories
    .map((memory, index) => {
      return `
        <button type="button" class="gallery-card" role="listitem" aria-label="Open ${memory.title} in the lightbox" data-lightbox-collection="gallery" data-lightbox-index="${index}" aria-haspopup="dialog">
          <span class="gallery-card__media">
            <img src="${memory.src}" alt="${memory.title} — ${memory.description}" loading="lazy" />
          </span>
          <span class="gallery-card__label">${memory.title}<span>${memory.description}</span></span>
        </button>
      `;
    })
    .join('');
}

export function initGallery() {
  renderGallery();

  if (galleryGridEl) {
    galleryGridEl.addEventListener('click', (event) => {
      const found = findLightboxTrigger(event.target);
      if (!found || found.collection !== 'gallery') {
        return;
      }
      openLightbox(found.collection, found.index, found.trigger);
    });

    galleryGridEl.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      const found = findLightboxTrigger(event.target);
      if (!found || found.collection !== 'gallery') {
        return;
      }
      event.preventDefault();
      openLightbox(found.collection, found.index, found.trigger);
    });
  }
}
