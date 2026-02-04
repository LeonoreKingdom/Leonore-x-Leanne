// ======= Main Entry Point =======
// This file imports and initializes all modules

import { initLightbox } from './modules/lightbox.js';
import { initPlayer, initMusicAfterGesture } from './modules/player.js';
import { initCarousel } from './modules/carousel.js';
import { initGallery } from './modules/gallery.js';
import { initLetters } from './modules/letters.js';
import { initTimeline } from './modules/timeline.js';
import { initGames } from './modules/games.js';
import { initNavigation } from './modules/navigation.js';
import { initParticles } from './modules/particles.js';
import { initMomentsVideo } from './modules/video.js';
import { initQuotes } from './modules/quotes.js';

// Initialize all modules
initLightbox();
initPlayer();
initCarousel();
initGallery();
initLetters();
initTimeline();
initGames();
initMomentsVideo();
initNavigation();
initParticles();
initQuotes();

// Request autoplay after user gesture
const requestAutoplayAfterGesture = () => {
  initMusicAfterGesture();
  window.removeEventListener('pointerdown', requestAutoplayAfterGesture);
  window.removeEventListener('keydown', requestAutoplayAfterGesture);
};

window.addEventListener('pointerdown', requestAutoplayAfterGesture, { once: true });
window.addEventListener('keydown', requestAutoplayAfterGesture, { once: true });
