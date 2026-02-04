import { loveLetters } from './config.js';
import { openLightbox, findLightboxTrigger, buildLetterCaption, setLetterLightboxItems, setActiveLightboxCollection } from './lightbox.js';

const letterGalleryEl = document.getElementById('letterGallery');

export function renderLoveLetters() {
  if (!letterGalleryEl) {
    return;
  }
  const letterLightboxItems = [];
  letterGalleryEl.innerHTML = loveLetters
    .map((letter, index) => {
      const ringNumber = String(index + 1).padStart(2, '0');
      const ringLabel = `Ring ${ringNumber} — ${letter.flavor}`;
      const hasLetter = Boolean(letter.letter);
      const displayDate = hasLetter ? letter.date : 'Soon';
      let lightboxIndex = -1;
      if (hasLetter) {
        lightboxIndex =
          letterLightboxItems.push({
            src: letter.letter,
            alt: `${ringLabel} love letter`,
            caption: buildLetterCaption(letter),
          }) - 1;
      }
      const articleClasses = `love-card${hasLetter ? '' : ' love-card--upcoming'}`;
      const ariaLabel = hasLetter ? `Open ${ringLabel} love letter` : `${ringLabel} chapter coming soon`;
      const interactiveAttributes = hasLetter ? ` tabindex="0" data-lightbox-collection="letters" data-lightbox-index="${lightboxIndex}"` : '';
      const buttonMarkup = hasLetter
        ? `
          <button type="button" class="love-card__button" data-lightbox-collection="letters" data-lightbox-index="${lightboxIndex}" aria-haspopup="dialog">
            Read Chapter
          </button>
        `
        : '';
      return `
        <article class="${articleClasses}" role="listitem" aria-label="${ariaLabel}"${interactiveAttributes}>
          <div class="love-card__ring">
            <img src="${letter.ring}" alt="${ringLabel}" loading="lazy" />
          </div>
          <div class="love-card__meta">
            <div class="love-card__title">${ringLabel}</div>
            <div class="love-card__subtitle">${letter.chapter} • ${displayDate}</div>
          </div>
          ${buttonMarkup}
        </article>
      `;
    })
    .join('');

  // Update lightbox items
  setLetterLightboxItems(letterLightboxItems);
}

export function initLetters() {
  renderLoveLetters();
  setActiveLightboxCollection('letters');

  if (letterGalleryEl) {
    letterGalleryEl.addEventListener('click', (event) => {
      const found = findLightboxTrigger(event.target);
      if (!found || found.collection !== 'letters') {
        return;
      }
      openLightbox(found.collection, found.index, found.trigger);
    });

    letterGalleryEl.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') {
        return;
      }
      const found = findLightboxTrigger(event.target);
      if (!found || found.collection !== 'letters') {
        return;
      }
      event.preventDefault();
      openLightbox(found.collection, found.index, found.trigger);
    });
  }
}
