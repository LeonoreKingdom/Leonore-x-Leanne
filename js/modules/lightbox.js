import { galleryMemories, LIGHTBOX_MIN_ZOOM, LIGHTBOX_MAX_ZOOM, LIGHTBOX_ZOOM_STEP } from './config.js';
import { clamp } from './utils.js';

// DOM Elements
const loveLightboxEl = document.getElementById('loveLightbox');
const lightboxImageEl = document.getElementById('lightboxImage');
const lightboxCaptionEl = document.getElementById('lightboxCaption');
const lightboxCloseBtn = document.getElementById('lightboxClose');
const lightboxPrevBtn = document.getElementById('lightboxPrev');
const lightboxNextBtn = document.getElementById('lightboxNext');
const lightboxStageEl = document.getElementById('lightboxStage');
const lightboxZoomOutBtn = document.getElementById('lightboxZoomOut');
const lightboxZoomResetBtn = document.getElementById('lightboxZoomReset');
const lightboxZoomInBtn = document.getElementById('lightboxZoomIn');
const heroLightboxEl = document.getElementById('heroLightbox');
const heroLightboxImageEl = document.getElementById('heroLightboxImage');
const heroLightboxCloseBtn = document.getElementById('heroLightboxClose');
const heroLightboxPrevBtn = document.getElementById('heroLightboxPrev');
const heroLightboxNextBtn = document.getElementById('heroLightboxNext');

// State
let lastLightboxTrigger = null;
let lastHeroLightboxTrigger = null;
let activeLightboxCollection = 'letters';
let currentLightboxIndex = -1;
export let letterLightboxItems = [];
const galleryLightboxItems = galleryMemories.map((memory) => ({
  src: memory.src,
  alt: `${memory.title} — ${memory.description}`,
  caption: `${memory.title} — ${memory.description}`,
}));
let activeLightboxItems = letterLightboxItems;
let lightboxZoomLevel = 1;
let lightboxPanX = 0;
let lightboxPanY = 0;
let lightboxDragPointerId = null;
let isDraggingLightboxImage = false;
let dragStartX = 0;
let dragStartY = 0;

// Hero lightbox state
let heroLightboxIndex = 0;

// External references (set by carousel module)
let pauseHeroCarouselAutoplayFn = null;
let resumeHeroCarouselAutoplayFn = null;
let heroCarouselLightboxTriggers = [];
let heroCarouselSetSlideFn = null;
let heroCarouselGetIndexFn = () => 0;
let heroCarouselElRef = null;

export function setCarouselRefs({ pauseAutoplay, resumeAutoplay, triggers, setSlide, getIndex, carouselEl }) {
  pauseHeroCarouselAutoplayFn = pauseAutoplay;
  resumeHeroCarouselAutoplayFn = resumeAutoplay;
  heroCarouselLightboxTriggers = triggers;
  heroCarouselSetSlideFn = setSlide;
  heroCarouselGetIndexFn = getIndex;
  heroCarouselElRef = carouselEl;
}

export function setLetterLightboxItems(items) {
  letterLightboxItems = items;
  if (activeLightboxCollection === 'letters') {
    activeLightboxItems = letterLightboxItems;
  }
}

function restoreBodyScroll() {
  const loveOpen = loveLightboxEl?.classList.contains('is-visible');
  const heroOpen = heroLightboxEl?.classList.contains('is-visible');
  if (!loveOpen && !heroOpen) {
    document.body.style.overflow = '';
  }
}

export function buildLetterCaption(letter) {
  return `${letter.chapter} - ${letter.flavor} - ${letter.date}`;
}

export function updateLightboxNavButtons() {
  const total = activeLightboxItems.length;
  const shouldDisable = total <= 1 || currentLightboxIndex < 0;
  if (lightboxPrevBtn) {
    lightboxPrevBtn.disabled = shouldDisable;
    lightboxPrevBtn.setAttribute('aria-hidden', shouldDisable ? 'true' : 'false');
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.disabled = shouldDisable;
    lightboxNextBtn.setAttribute('aria-hidden', shouldDisable ? 'true' : 'false');
  }
}

function updateZoomButtonState() {
  const nearMin = lightboxZoomLevel <= LIGHTBOX_MIN_ZOOM + 0.01;
  const nearMax = lightboxZoomLevel >= LIGHTBOX_MAX_ZOOM - 0.01;
  if (lightboxZoomOutBtn) {
    lightboxZoomOutBtn.disabled = nearMin;
  }
  if (lightboxZoomResetBtn) {
    lightboxZoomResetBtn.disabled = nearMin;
  }
  if (lightboxZoomInBtn) {
    lightboxZoomInBtn.disabled = nearMax;
  }
}

function syncLightboxZoomClasses() {
  const zoomed = lightboxZoomLevel > LIGHTBOX_MIN_ZOOM + 0.01;
  if (lightboxStageEl) {
    lightboxStageEl.classList.toggle('is-zoomed', zoomed);
    if (!zoomed) {
      lightboxStageEl.classList.remove('is-grabbing');
    }
  }
  if (lightboxImageEl) {
    lightboxImageEl.classList.toggle('is-zoomed', zoomed);
  }
}

function applyLightboxTransform() {
  if (!lightboxImageEl) {
    return;
  }
  lightboxImageEl.style.transform = `translate(${lightboxPanX}px, ${lightboxPanY}px) scale(${lightboxZoomLevel})`;
  syncLightboxZoomClasses();
  updateZoomButtonState();
}

function constrainLightboxPan() {
  if (!lightboxStageEl || lightboxZoomLevel <= LIGHTBOX_MIN_ZOOM) {
    lightboxPanX = 0;
    lightboxPanY = 0;
    return;
  }
  const rect = lightboxStageEl.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }
  const limitX = (rect.width * lightboxZoomLevel - rect.width) / 2;
  const limitY = (rect.height * lightboxZoomLevel - rect.height) / 2;
  const maxX = Math.max(limitX, 0) + 24;
  const maxY = Math.max(limitY, 0) + 24;
  lightboxPanX = clamp(lightboxPanX, -maxX, maxX);
  lightboxPanY = clamp(lightboxPanY, -maxY, maxY);
}

function endLightboxDrag() {
  if (!isDraggingLightboxImage) {
    return;
  }
  isDraggingLightboxImage = false;
  if (lightboxStageEl && lightboxDragPointerId !== null) {
    lightboxStageEl.releasePointerCapture(lightboxDragPointerId);
    lightboxStageEl.classList.remove('is-grabbing');
  }
  lightboxDragPointerId = null;
}

function resetLightboxZoomState() {
  if (isDraggingLightboxImage) {
    endLightboxDrag();
  }
  lightboxZoomLevel = LIGHTBOX_MIN_ZOOM;
  lightboxPanX = 0;
  lightboxPanY = 0;
  lightboxDragPointerId = null;
  isDraggingLightboxImage = false;
  if (lightboxStageEl) {
    lightboxStageEl.classList.remove('is-grabbing');
  }
  applyLightboxTransform();
}

function setLightboxZoom(level, { focusX, focusY } = {}) {
  const newZoom = clamp(level, LIGHTBOX_MIN_ZOOM, LIGHTBOX_MAX_ZOOM);
  if (Math.abs(newZoom - lightboxZoomLevel) < 0.01) {
    return;
  }
  if (lightboxStageEl) {
    const rect = lightboxStageEl.getBoundingClientRect();
    if (rect.width && rect.height) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const originX = typeof focusX === 'number' ? focusX : centerX;
      const originY = typeof focusY === 'number' ? focusY : centerY;
      const offsetX = originX - centerX;
      const offsetY = originY - centerY;
      if (lightboxZoomLevel > LIGHTBOX_MIN_ZOOM || newZoom > LIGHTBOX_MIN_ZOOM) {
        const ratio = newZoom / lightboxZoomLevel;
        lightboxPanX = (lightboxPanX + offsetX) * ratio - offsetX;
        lightboxPanY = (lightboxPanY + offsetY) * ratio - offsetY;
      }
    }
  }
  lightboxZoomLevel = newZoom;
  if (lightboxZoomLevel === LIGHTBOX_MIN_ZOOM) {
    lightboxPanX = 0;
    lightboxPanY = 0;
  }
  constrainLightboxPan();
  applyLightboxTransform();
}

function changeLightboxZoom(delta, options) {
  setLightboxZoom(lightboxZoomLevel + delta, options);
}

function handleLightboxPointerDown(event) {
  if (event.pointerType === 'touch') {
    event.preventDefault();
  }
  if (lightboxZoomLevel <= LIGHTBOX_MIN_ZOOM || event.button === 1 || event.button === 2) {
    return;
  }
  isDraggingLightboxImage = true;
  lightboxDragPointerId = event.pointerId;
  dragStartX = event.clientX - lightboxPanX;
  dragStartY = event.clientY - lightboxPanY;
  if (lightboxStageEl) {
    lightboxStageEl.setPointerCapture(event.pointerId);
    lightboxStageEl.classList.add('is-grabbing');
  }
}

function handleLightboxPointerMove(event) {
  if (!isDraggingLightboxImage || event.pointerId !== lightboxDragPointerId) {
    return;
  }
  lightboxPanX = event.clientX - dragStartX;
  lightboxPanY = event.clientY - dragStartY;
  constrainLightboxPan();
  applyLightboxTransform();
}

function handleLightboxWheel(event) {
  if (!lightboxStageEl || event.ctrlKey) {
    return;
  }
  if (lightboxStageEl.contains(event.target)) {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    const rect = lightboxStageEl.getBoundingClientRect();
    const focusX = event.clientX - rect.left;
    const focusY = event.clientY - rect.top;
    changeLightboxZoom(direction * LIGHTBOX_ZOOM_STEP, { focusX, focusY });
  }
}

function toggleLightboxZoom(event) {
  if (lightboxZoomLevel > LIGHTBOX_MIN_ZOOM + 0.01) {
    resetLightboxZoomState();
  } else if (lightboxStageEl) {
    const rect = lightboxStageEl.getBoundingClientRect();
    const focusX = event ? event.clientX - rect.left : rect.width / 2;
    const focusY = event ? event.clientY - rect.top : rect.height / 2;
    setLightboxZoom(Math.min(2, LIGHTBOX_MAX_ZOOM), { focusX, focusY });
  }
}

function getLightboxItems(collectionKey) {
  switch (collectionKey) {
    case 'letters':
      return letterLightboxItems;
    case 'gallery':
      return galleryLightboxItems;
    default:
      return [];
  }
}

export function setActiveLightboxCollection(collectionKey) {
  const items = getLightboxItems(collectionKey);
  activeLightboxCollection = collectionKey;
  activeLightboxItems = items;
  currentLightboxIndex = -1;
  updateLightboxNavButtons();
  return items.length > 0;
}

function setLightboxContent(index) {
  const item = activeLightboxItems[index];
  if (!item || !item.src) {
    return false;
  }
  resetLightboxZoomState();
  if (lightboxImageEl) {
    lightboxImageEl.src = item.src;
    lightboxImageEl.alt = item.alt || item.caption || 'Captured memory';
  }
  if (lightboxCaptionEl) {
    lightboxCaptionEl.textContent = item.caption || '';
  }
  currentLightboxIndex = index;
  updateLightboxNavButtons();
  return true;
}

export function openLightbox(collectionKey, index, trigger) {
  if (!loveLightboxEl) {
    return;
  }
  if (!setActiveLightboxCollection(collectionKey)) {
    return;
  }
  if (!setLightboxContent(index)) {
    return;
  }
  lastLightboxTrigger = trigger || null;
  loveLightboxEl.classList.add('is-visible');
  loveLightboxEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (lightboxCloseBtn) {
    lightboxCloseBtn.focus();
  }
}

export function closeLightbox() {
  if (!loveLightboxEl) {
    return;
  }
  loveLightboxEl.classList.remove('is-visible');
  loveLightboxEl.setAttribute('aria-hidden', 'true');
  restoreBodyScroll();
  if (lightboxImageEl) {
    lightboxImageEl.src = '';
    lightboxImageEl.alt = '';
  }
  if (lightboxCaptionEl) {
    lightboxCaptionEl.textContent = '';
  }
  currentLightboxIndex = -1;
  updateLightboxNavButtons();
  resetLightboxZoomState();
  if (lastLightboxTrigger) {
    lastLightboxTrigger.focus();
  }
  lastLightboxTrigger = null;
}

export function moveLightbox(step) {
  if (currentLightboxIndex < 0 || !activeLightboxItems.length) {
    return;
  }
  const total = activeLightboxItems.length;
  const nextIndex = (currentLightboxIndex + step + total) % total;
  setLightboxContent(nextIndex);
}

// Hero Lightbox functions
export function updateHeroLightboxNavState() {
  const shouldDisable = heroCarouselLightboxTriggers.length <= 1;
  if (heroLightboxPrevBtn) {
    heroLightboxPrevBtn.disabled = shouldDisable;
    heroLightboxPrevBtn.setAttribute('aria-hidden', shouldDisable ? 'true' : 'false');
  }
  if (heroLightboxNextBtn) {
    heroLightboxNextBtn.disabled = shouldDisable;
    heroLightboxNextBtn.setAttribute('aria-hidden', shouldDisable ? 'true' : 'false');
  }
}

function setHeroLightboxSlide(targetIndex, { syncCarousel = true, sourceImage = null } = {}) {
  if (!heroLightboxImageEl || !heroCarouselLightboxTriggers.length) {
    return;
  }
  const total = heroCarouselLightboxTriggers.length;
  if (total === 0) {
    return;
  }
  const normalizedIndex = ((targetIndex % total) + total) % total;
  heroLightboxIndex = normalizedIndex;
  const trigger = heroCarouselLightboxTriggers[normalizedIndex];
  const innerImage = sourceImage || trigger?.querySelector('img');
  const fullSrc = trigger?.dataset.heroLightbox || innerImage?.currentSrc || innerImage?.src || '';
  const altText = innerImage?.alt || 'Memory from our scrapbook';
  if (fullSrc) {
    heroLightboxImageEl.src = fullSrc;
  }
  heroLightboxImageEl.alt = altText;
  if (syncCarousel) {
    heroCarouselSetSlideFn?.(normalizedIndex);
  }
  updateHeroLightboxNavState();
}

export function openHeroLightbox(trigger) {
  if (!heroLightboxEl || !heroLightboxImageEl) {
    return;
  }
  const button = trigger instanceof HTMLElement ? trigger : null;
  const innerImage = button ? button.querySelector('img') : null;
  const triggerIndex = button ? heroCarouselLightboxTriggers.indexOf(button) : -1;
  const fallbackIndex = typeof heroCarouselGetIndexFn === 'function' ? heroCarouselGetIndexFn() : 0;
  const targetIndex = triggerIndex >= 0 ? triggerIndex : fallbackIndex;
  lastHeroLightboxTrigger = button;
  setHeroLightboxSlide(targetIndex, { syncCarousel: false, sourceImage: innerImage });
  heroLightboxEl.classList.add('is-visible');
  heroLightboxEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  pauseHeroCarouselAutoplayFn?.();
  if (heroLightboxCloseBtn) {
    heroLightboxCloseBtn.focus();
  }
}

export function closeHeroLightbox() {
  if (!heroLightboxEl) {
    return;
  }
  heroLightboxEl.classList.remove('is-visible');
  heroLightboxEl.setAttribute('aria-hidden', 'true');
  if (heroLightboxImageEl) {
    heroLightboxImageEl.src = '';
    heroLightboxImageEl.alt = '';
  }
  restoreBodyScroll();
  if (lastHeroLightboxTrigger) {
    lastHeroLightboxTrigger.focus();
  }
  lastHeroLightboxTrigger = null;
  if (heroCarouselElRef && heroCarouselElRef.matches(':hover')) {
    pauseHeroCarouselAutoplayFn?.();
  } else {
    resumeHeroCarouselAutoplayFn?.();
  }
}

export function moveHeroLightbox(delta) {
  if (!heroCarouselLightboxTriggers.length) {
    return;
  }
  setHeroLightboxSlide(heroLightboxIndex + delta);
}

export function findLightboxTrigger(eventTarget) {
  if (!(eventTarget instanceof HTMLElement)) {
    return null;
  }
  const trigger = eventTarget.closest('[data-lightbox-index]');
  if (!trigger) {
    return null;
  }
  const index = Number.parseInt(trigger.dataset.lightboxIndex || '', 10);
  const collection = trigger.dataset.lightboxCollection || '';
  if (Number.isNaN(index) || !collection) {
    return null;
  }
  return { index, collection, trigger };
}

export function isLoveLightboxVisible() {
  return loveLightboxEl && loveLightboxEl.classList.contains('is-visible');
}

export function isHeroLightboxVisible() {
  return heroLightboxEl && heroLightboxEl.classList.contains('is-visible');
}

// Initialize event listeners
export function initLightbox() {
  if (loveLightboxEl) {
    loveLightboxEl.addEventListener('click', (event) => {
      if (event.target === loveLightboxEl) {
        closeLightbox();
      }
    });
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', closeLightbox);
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => moveLightbox(-1));
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => moveLightbox(1));
  }

  if (lightboxZoomInBtn) {
    lightboxZoomInBtn.addEventListener('click', () => changeLightboxZoom(LIGHTBOX_ZOOM_STEP));
  }

  if (lightboxZoomOutBtn) {
    lightboxZoomOutBtn.addEventListener('click', () => changeLightboxZoom(-LIGHTBOX_ZOOM_STEP));
  }

  if (lightboxZoomResetBtn) {
    lightboxZoomResetBtn.addEventListener('click', () => resetLightboxZoomState());
  }

  if (lightboxStageEl) {
    lightboxStageEl.addEventListener('pointerdown', handleLightboxPointerDown);
    lightboxStageEl.addEventListener('pointermove', handleLightboxPointerMove);
    lightboxStageEl.addEventListener('pointerup', endLightboxDrag);
    lightboxStageEl.addEventListener('pointercancel', endLightboxDrag);
    lightboxStageEl.addEventListener('pointerleave', endLightboxDrag);
    lightboxStageEl.addEventListener('wheel', handleLightboxWheel, { passive: false });
    lightboxStageEl.addEventListener('dblclick', (event) => {
      event.preventDefault();
      toggleLightboxZoom(event);
    });
  }

  updateZoomButtonState();

  // Hero lightbox
  if (heroLightboxEl) {
    heroLightboxEl.addEventListener('click', (event) => {
      if (event.target === heroLightboxEl) {
        closeHeroLightbox();
      }
    });
  }

  if (heroLightboxCloseBtn) {
    heroLightboxCloseBtn.addEventListener('click', closeHeroLightbox);
  }

  if (heroLightboxPrevBtn) {
    heroLightboxPrevBtn.addEventListener('click', () => moveHeroLightbox(-1));
  }

  if (heroLightboxNextBtn) {
    heroLightboxNextBtn.addEventListener('click', () => moveHeroLightbox(1));
  }

  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    const loveLightboxVisible = isLoveLightboxVisible();
    const heroLightboxVisible = isHeroLightboxVisible();

    if (event.key === 'Escape') {
      if (loveLightboxVisible) {
        closeLightbox();
      }
      if (heroLightboxVisible) {
        closeHeroLightbox();
      }
      return;
    }

    if (heroLightboxVisible) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveHeroLightbox(1);
        return;
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveHeroLightbox(-1);
        return;
      }
    }

    if (!loveLightboxVisible) {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      moveLightbox(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      moveLightbox(-1);
    }
  });

  updateLightboxNavButtons();
}
