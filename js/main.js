// Moved from index.html
// ======= CONFIG (edit these!) =======
const PLAYLIST = [
  // Add new songs or reorder existing ones here to adjust the playlist sequence.
  { id: '06-XXOTP3Gc', title: 'Shane Filan - Beautiful in White'},
  { id: 'OT5msu-dap8', title: 'Backstreet Boys - Shape of My Heart' },
  { id: 'Qy7z_oiN6nQ', title: 'George Benson - Nothing\'s Gonna Change My Love For You'},
  { id: 'DXvMT_mVbqw', title: 'K-Ci & JoJo - All My Life' },
  { id: 'Ip6cw8gfHHI', title: 'd4vd - Here With Me' },
  { id: 'KNZH-emehxA', title: 'Shania Twain - You\'re Still The One' },
  { id: 'HeK1zQFJtXE', title: 'Tamia - Officially Missing You' },
  { id: '8MG--WuNW1Y', title: 'Wei Bird - 如果可以' },
  { id: 'S_E2EHVxNAE', title: 'Richard Marx - Right Here Waiting' },
  { id: 'Ju8Hr50Ckwk', title: 'Alicia Keys - If I Ain\'t Got You' },
  { id: 'iBrOFd1wDuQ', title: '羅志祥 - 愛不單行' },
  { id: 'd4_QuMkOdCI', title: 'Eric Clapton - Wonderful Tonight' },
  { id: 'XJ1Jigjg1wo', title: 'Ardhito Pramono - Waking Up Together With You' },
  { id: 'Xct1EdyHMWw', title: 'Yahya - keepyousafe' },
  { id: '5W0UH4VbptE', title: 'PK Haeman - Evergreen Part 2' },
  { id: '7KVxjQUCyn0', title: 'Mariah Carey, Joe, 98 Degrees - Thank God I Found You' },
  { id: 'ulOb9gIGGd0', title: 'Westlife - My Love' },
  { id: '2VInZQdh1eY', title: 'M2M - Pretty Boy' },
  { id: 'psN0NH8IcbQ', title: 'Brian McKnight - Back At One' },
  { id: 'IlrXHkPvn8I', title: 'Celine Dion - Because You Loved Me' },
  { id: 'ZnOAK04tJhc', title: 'Westlife - I Lay My Love on You' },
  { id: 'K1uNjmxJQUo', title: 'The Pussycat Dolls - Stickwitu' },
  { id: '1WCIrw85zbQ', title: 'Westlife - I Wanna Grow Old with You' },
  { id: 'KnJfMzsyDS0', title: 'Inquisitive feat. Hannah Ying - 不得不爱' },
  { id: 'WCM_eSgaK6o', title: 'Vic Chou - Make a Wish' },
  { id: 'IvRQBrOY6Bk', title: '김동률 - 취중진담' },
  { id: 'V9PVRfjEBTI', title: 'Billie Eilish - BIRDS OF A FEATHER' },
];

const loveLetters = [
  {
    ring: 'images/Ring/ring_01-ayodance-sugar.png',
    letter: 'images/LP Love Letter ♡/Chapter 0 - Sugar - 13.10.2025.jpg',
    chapter: 'Chapter 0',
    flavor: 'Sugar',
    date: '13.10.2025',
  },
  {
    ring: 'images/Ring/ring_02-ayodance-sweet.png',
    letter: 'images/LP Love Letter ♡/Chapter 1 - Sweet - 14.10.2025.jpg',
    chapter: 'Chapter 1',
    flavor: 'Sweet',
    date: '14.10.2025',
  },
  {
    ring: 'images/Ring/ring_03-ayodance-candy.png',
    letter: 'images/LP Love Letter ♡/Chapter 2 - Candy - 14.10.2025.jpg',
    chapter: 'Chapter 2',
    flavor: 'Candy',
    date: '14.10.2025',
  },
  {
    ring: 'images/Ring/ring_04-ayodance-cherry.png',
    letter: 'images/LP Love Letter ♡/Chapter 3 - Cherry - 16.10.2025.jpg',
    chapter: 'Chapter 3',
    flavor: 'Cherry',
    date: '16.10.2025',
  },
  {
    ring: 'images/Ring/ring_05-ayodance-strawberry.png',
    letter: 'images/LP Love Letter ♡/Chapter 4 - Strawberry - 16.10.2025.jpg',
    chapter: 'Chapter 4',
    flavor: 'Strawberry',
    date: '16.10.2025',
  },
  {
    ring: 'images/Ring/ring_06-ayodance-honey.png',
    letter: 'images/LP Love Letter ♡/Chapter 5 - Honey - 18.10.2025.jpg',
    chapter: 'Chapter 5',
    flavor: 'Honey',
    date: '18.10.2025',
  },
  {
    ring: 'images/Ring/ring_07-ayodance-chocholate.png',
    letter: 'images/LP Love Letter ♡/Chapter 6 - Chocolate - 18.10.2025.jpg',
    chapter: 'Chapter 6',
    flavor: 'Chocolate',
    date: '18.10.2025',
  },
  {
    ring: 'images/Ring/ring_08-ayodance-cupcake.png',
    letter: 'images/LP Love Letter ♡/Chapter 7 - Cupcake - 23.10.2025.jpg',
    chapter: 'Chapter 7',
    flavor: 'Cupcake',
    date: '23.10.2025',
  },
  {
    ring: 'images/Ring/ring_09-ayodance-brownies.png',
    letter: 'images/LP Love Letter ♡/Chapter 8 - Brownies - 24.10.2025.jpg',
    chapter: 'Chapter 8',
    flavor: 'Brownies',
    date: '24.10.2025',
  },
  {
    ring: 'images/Ring/ring_10-ayodance-tiramisu.png',
    letter: 'images/LP Love Letter ♡/Chapter 9 - Tiramisu - 27.10.2025.jpg',
    chapter: 'Chapter 9',
    flavor: 'Tiramisu',
    date: '27.10.2025',
  },
  {
    ring: 'images/Ring/ring_11-ayodance-sakura.png',
    letter: 'images/LP Love Letter ♡/Chapter 10 - Sakura - 31.10.2025.jpg',
    chapter: 'Chapter 10',
    flavor: 'Sakura',
    date: '31.10.2025',
  },
  {
    ring: 'images/Ring/ring_12-ayodance-roses.png',
    letter: 'images/LP Love Letter ♡/Chapter 11 - Roses - 03.11.2025.jpg',
    chapter: 'Chapter 11',
    flavor: 'Roses',
    date: '03.11.2025',
  },
  {
    ring: 'images/Ring/ring_13-ayodance-edelweiss.png',
    letter: null,
    chapter: 'Chapter 12',
    flavor: 'Edelweiss',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_14-ayodance-lobelia.png',
    letter: null,
    chapter: 'Chapter 13',
    flavor: 'Lobelia',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_15-ayodance-peppermint.png',
    letter: null,
    chapter: 'Chapter 14',
    flavor: 'Peppermint',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_16-ayodance-iris.png',
    letter: null,
    chapter: 'Chapter 15',
    flavor: 'Iris',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_17-lapith.png',
    letter: null,
    chapter: 'Chapter 16',
    flavor: 'Lapith',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_18-ayodance-marigold.png',
    letter: null,
    chapter: 'Chapter 17',
    flavor: 'Marigold',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_19-ayodance-cleome.png',
    letter: null,
    chapter: 'Chapter 18',
    flavor: 'Cleome',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_20-ayodance-rudbeckia.png',
    letter: null,
    chapter: 'Chapter 19',
    flavor: 'Rudbeckia',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_21-ayodance-anemone.png',
    letter: null,
    chapter: 'Chapter 20',
    flavor: 'Anemone',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_22-ayodance-hyacinth.png',
    letter: null,
    chapter: 'Chapter 21',
    flavor: 'Hyacinth',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_23-ayodance-ambrosia.png',
    letter: null,
    chapter: 'Chapter 22',
    flavor: 'Ambrosia',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_24-ayodance-geranium.png',
    letter: null,
    chapter: 'Chapter 23',
    flavor: 'Geranium',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_25-ayodance-lupine.png',
    letter: null,
    chapter: 'Chapter 24',
    flavor: 'Lupine',
    date: 'Soon',
  },
  {
    ring: 'images/Ring/ring_26-ayodance-orchid.png',
    letter: null,
    chapter: 'Chapter 25',
    flavor: 'Orchid',
    date: 'Soon',
  },
];

const galleryMemories = [
  {
    src: 'images/Gallery/1.png',
    title: 'Memory 01',
    description: 'Soft smiles in our cozy corner',
  },
  {
    src: 'images/Gallery/2.png',
    title: 'Memory 02',
    description: 'You, me, and pastel skies',
  },
  {
    src: 'images/Gallery/3.png',
    title: 'Memory 03',
    description: 'A candid that feels like sunshine',
  },
  {
    src: 'images/Gallery/4.png',
    title: 'Memory 04',
    description: 'Holding each other a little closer',
  },
  {
    src: 'images/Gallery/5.png',
    title: 'Memory 05',
    description: 'Our laughter caught mid-sparkle',
  },
  {
    src: 'images/Gallery/6.jpg',
    title: 'Memory 06',
    description: 'Sweet treats and sweeter company',
  },
  {
    src: 'images/Gallery/7.jpg',
    title: 'Memory 07',
    description: 'A gentle hug at golden hour',
  },
  {
    src: 'images/Gallery/8.jpg',
    title: 'Memory 08',
    description: 'Dreamy lights and daydream eyes',
  },
];

const letterGalleryEl = document.getElementById('letterGallery');
const galleryGridEl = document.getElementById('galleryGrid');
const heroCarouselEl = document.querySelector('[data-hero-carousel]');
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
const scrollTopBtn = document.getElementById('scrollTopBtn');
const playlistToggleBtn = document.getElementById('playlistToggle');
const playlistPanelEl = document.getElementById('playlistPanel');
const sideNavEl = document.getElementById('sideNav');
const sideNavToggleBtn = document.getElementById('sideNavToggle');
const sideNavLogoEl = document.getElementById('sideNavLogo');
const momentsVideoEl = document.getElementById('momentsVideo');
const gamesTabEls = document.querySelectorAll('.games-tab');
const gamePanelEls = document.querySelectorAll('.game-panel');
const tetrisCanvas = document.getElementById('tetrisCanvas');
const tetrisScoreEl = document.getElementById('tetrisScore');
const tetrisBestEl = document.getElementById('tetrisBest');
const tetrisStartBtn = document.getElementById('tetrisStart');
const chessBoardEl = document.getElementById('chessBoard');
const chessStatusEl = document.getElementById('chessStatus');
const chessWinsEl = document.getElementById('chessWins');
const chessLossesEl = document.getElementById('chessLosses');
const chessRestartBtn = document.getElementById('chessRestart');
const SIDE_NAV_LOGO_DEFAULT_SRC = 'images/logo.png';
const SIDE_NAV_LOGO_COLLAPSED_SRC = 'images/logo-shrink.png';

let lastLightboxTrigger = null;
let lastHeroLightboxTrigger = null;
let activeLightboxCollection = 'letters';
let currentLightboxIndex = -1;
let letterLightboxItems = [];
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
const LIGHTBOX_MIN_ZOOM = 1;
const LIGHTBOX_MAX_ZOOM = 3.2;
const LIGHTBOX_ZOOM_STEP = 0.25;
const reduceMotionQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
let prefersReducedMotion = Boolean(reduceMotionQuery?.matches);
const GAME_STATS_KEY = 'loveCorner:gameStats';
const storageAvailable = (() => {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    const testKey = '__loveCorner__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
})();

function loadGameStats() {
  const defaults = {
    tetrisBest: 0,
    chessWins: 0,
    chessLosses: 0,
    chessBoard: null,
    chessTurn: 'white',
  };
  if (!storageAvailable) {
    return { ...defaults };
  }
  try {
    const raw = window.localStorage.getItem(GAME_STATS_KEY);
    if (!raw) {
      return { ...defaults };
    }
    const parsed = JSON.parse(raw);
    return { ...defaults, ...parsed };
  } catch (error) {
    console.warn('Unable to load saved game stats', error);
    return { ...defaults };
  }
}

function persistGameStats(stats) {
  if (!storageAvailable) {
    return;
  }
  try {
    window.localStorage.setItem(GAME_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.warn('Unable to save game stats', error);
  }
}

let gameStats = loadGameStats();

let pauseHeroCarouselAutoplay = null;
let resumeHeroCarouselAutoplay = null;
let heroCarouselLightboxTriggers = [];
let heroCarouselSetSlide = null;
let heroCarouselGetIndex = () => 0;

let heroLightboxIndex = 0;
let isPlaylistExpanded = true;

const reduceMotionSubscribers = [];

function emitReduceMotionPreferenceChange(matches) {
  reduceMotionSubscribers.forEach((callback) => {
    try {
      callback(matches);
    } catch (error) {
      console.error('Error in reduce motion subscriber', error);
    }
  });
}

function onReduceMotionPreferenceChange(callback) {
  if (typeof callback === 'function') {
    reduceMotionSubscribers.push(callback);
  }
}

if (reduceMotionQuery) {
  const handleReduceMotionChange = (event) => {
    const matches = typeof event === 'boolean' ? event : Boolean(event.matches);
    prefersReducedMotion = matches;
    emitReduceMotionPreferenceChange(matches);
  };
  if (typeof reduceMotionQuery.addEventListener === 'function') {
    reduceMotionQuery.addEventListener('change', handleReduceMotionChange);
  } else if (typeof reduceMotionQuery.addListener === 'function') {
    reduceMotionQuery.addListener(handleReduceMotionChange);
  }
}

if (heroCarouselEl) {
  const heroCarouselTrackEl = heroCarouselEl.querySelector('[data-hero-track]');
  const heroCarouselSlides = heroCarouselTrackEl ? Array.from(heroCarouselTrackEl.children) : [];
  const heroCarouselDots = Array.from(heroCarouselEl.querySelectorAll('[data-hero-dot]'));
  const heroCarouselPrevBtn = heroCarouselEl.querySelector('[data-hero-prev]');
  const heroCarouselNextBtn = heroCarouselEl.querySelector('[data-hero-next]');
  heroCarouselLightboxTriggers = Array.from(heroCarouselEl.querySelectorAll('[data-hero-lightbox]'));
  let heroCarouselIndex = 0;
  let heroCarouselTimer = null;
  const HERO_CAROUSEL_INTERVAL = 6000;

  const setHeroCarouselSlide = (targetIndex, options = {}) => {
    if (!heroCarouselTrackEl || !heroCarouselSlides.length) {
      return;
    }
    const total = heroCarouselSlides.length;
    const { immediate = false } = options;
    heroCarouselIndex = ((targetIndex % total) + total) % total;
    const offset = heroCarouselIndex * -100;
    if (immediate) {
      heroCarouselTrackEl.classList.add('hero-carousel__track--no-transition');
    }
    heroCarouselTrackEl.style.transform = `translateX(${offset}%)`;
    if (immediate) {
      requestAnimationFrame(() => {
        heroCarouselTrackEl.classList.remove('hero-carousel__track--no-transition');
      });
    }
    heroCarouselSlides.forEach((slide, index) => {
      slide.classList.toggle('is-active', index === heroCarouselIndex);
    });
    heroCarouselDots.forEach((dot, index) => {
      const isActive = index === heroCarouselIndex;
      dot.classList.toggle('is-active', isActive);
      dot.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  heroCarouselSetSlide = (targetIndex, options = {}) => {
    setHeroCarouselSlide(targetIndex, options);
  };

  heroCarouselGetIndex = () => heroCarouselIndex;

  const stopHeroCarouselAutoplay = () => {
    if (heroCarouselTimer !== null) {
      window.clearInterval(heroCarouselTimer);
      heroCarouselTimer = null;
    }
  };

  const startHeroCarouselAutoplay = () => {
    if (prefersReducedMotion || heroCarouselSlides.length < 2) {
      stopHeroCarouselAutoplay();
      return;
    }
    stopHeroCarouselAutoplay();
    heroCarouselTimer = window.setInterval(() => {
      setHeroCarouselSlide(heroCarouselIndex + 1);
    }, HERO_CAROUSEL_INTERVAL);
  };

  heroCarouselDots.forEach((dot) => {
    const targetIndex = Number.parseInt(dot.dataset.heroDot || '', 10);
    if (Number.isNaN(targetIndex)) {
      return;
    }
    dot.addEventListener('click', () => {
      setHeroCarouselSlide(targetIndex);
      startHeroCarouselAutoplay();
    });
  });

  if (heroCarouselPrevBtn) {
    heroCarouselPrevBtn.addEventListener('click', () => {
      setHeroCarouselSlide(heroCarouselIndex - 1);
      startHeroCarouselAutoplay();
    });
  }

  if (heroCarouselNextBtn) {
    heroCarouselNextBtn.addEventListener('click', () => {
      setHeroCarouselSlide(heroCarouselIndex + 1);
      startHeroCarouselAutoplay();
    });
  }

  heroCarouselLightboxTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      openHeroLightbox(trigger);
    });
  });

  const applyMotionPreferenceToHero = (matches) => {
    heroCarouselEl.classList.toggle('hero-carousel--reduced', matches);
    if (matches) {
      stopHeroCarouselAutoplay();
      setHeroCarouselSlide(heroCarouselIndex, { immediate: true });
    } else {
      startHeroCarouselAutoplay();
    }
  };

  heroCarouselEl.addEventListener('mouseenter', stopHeroCarouselAutoplay);
  heroCarouselEl.addEventListener('mouseleave', startHeroCarouselAutoplay);
  heroCarouselEl.addEventListener('focusin', stopHeroCarouselAutoplay);
  heroCarouselEl.addEventListener('focusout', (event) => {
    if (!heroCarouselEl.contains(event.relatedTarget)) {
      startHeroCarouselAutoplay();
    }
  });

  setHeroCarouselSlide(heroCarouselIndex, { immediate: true });
  applyMotionPreferenceToHero(prefersReducedMotion);
  onReduceMotionPreferenceChange(applyMotionPreferenceToHero);

  pauseHeroCarouselAutoplay = stopHeroCarouselAutoplay;
  resumeHeroCarouselAutoplay = startHeroCarouselAutoplay;

  updateHeroLightboxNavState();
}

function restoreBodyScroll() {
  const loveOpen = loveLightboxEl?.classList.contains('is-visible');
  const heroOpen = heroLightboxEl?.classList.contains('is-visible');
  if (!loveOpen && !heroOpen) {
    document.body.style.overflow = '';
  }
}

function buildLetterCaption(letter) {
  return `${letter.chapter} - ${letter.flavor} - ${letter.date}`;
}

function updateLightboxNavButtons() {
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

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
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
  const limitX = ((rect.width * lightboxZoomLevel) - rect.width) / 2;
  const limitY = ((rect.height * lightboxZoomLevel) - rect.height) / 2;
  const maxX = Math.max(limitX, 0) + 24;
  const maxY = Math.max(limitY, 0) + 24;
  lightboxPanX = clamp(lightboxPanX, -maxX, maxX);
  lightboxPanY = clamp(lightboxPanY, -maxY, maxY);
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

function setActiveLightboxCollection(collectionKey) {
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

function openLightbox(collectionKey, index, trigger) {
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

function closeLightbox() {
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

function moveLightbox(step) {
  if (currentLightboxIndex < 0 || !activeLightboxItems.length) {
    return;
  }
  const total = activeLightboxItems.length;
  const nextIndex = (currentLightboxIndex + step + total) % total;
  setLightboxContent(nextIndex);
}

function openHeroLightbox(trigger) {
  if (!heroLightboxEl || !heroLightboxImageEl) {
    return;
  }
  const button = trigger instanceof HTMLElement ? trigger : null;
  const innerImage = button ? button.querySelector('img') : null;
  const triggerIndex = button ? heroCarouselLightboxTriggers.indexOf(button) : -1;
  const fallbackIndex = typeof heroCarouselGetIndex === 'function' ? heroCarouselGetIndex() : 0;
  const targetIndex = triggerIndex >= 0 ? triggerIndex : fallbackIndex;
  lastHeroLightboxTrigger = button;
  setHeroLightboxSlide(targetIndex, { syncCarousel: false, sourceImage: innerImage });
  heroLightboxEl.classList.add('is-visible');
  heroLightboxEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  pauseHeroCarouselAutoplay?.();
  if (heroLightboxCloseBtn) {
    heroLightboxCloseBtn.focus();
  }
}

function closeHeroLightbox() {
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
  if (heroCarouselEl && heroCarouselEl.matches(':hover')) {
    pauseHeroCarouselAutoplay?.();
  } else {
    resumeHeroCarouselAutoplay?.();
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
    heroCarouselSetSlide?.(normalizedIndex);
  }
  updateHeroLightboxNavState();
}

function moveHeroLightbox(delta) {
  if (!heroCarouselLightboxTriggers.length) {
    return;
  }
  setHeroLightboxSlide(heroLightboxIndex + delta);
}

function updateHeroLightboxNavState() {
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

function setPlaylistExpanded(expanded) {
  isPlaylistExpanded = Boolean(expanded);
  if (!playerEl || !playlistToggleBtn || !playlistPanelEl) {
    return;
  }
  playerEl.classList.toggle('player--playlist-collapsed', !isPlaylistExpanded);
  playlistToggleBtn.setAttribute('aria-expanded', isPlaylistExpanded ? 'true' : 'false');
  playlistPanelEl.setAttribute('aria-hidden', isPlaylistExpanded ? 'false' : 'true');
  if (isPlaylistExpanded) {
    playlistPanelEl.removeAttribute('inert');
  } else {
    playlistPanelEl.setAttribute('inert', '');
  }
  if (playlistEl) {
    const trackButtons = playlistEl.querySelectorAll('button');
    trackButtons.forEach((button) => {
      if (button.disabled) {
        button.tabIndex = -1;
        return;
      }
      button.tabIndex = isPlaylistExpanded ? 0 : -1;
    });
  }
}

function renderLoveLetters() {
  if (!letterGalleryEl) {
    return;
  }
  letterLightboxItems = [];
  letterGalleryEl.innerHTML = loveLetters
    .map((letter, index) => {
      const ringNumber = String(index + 1).padStart(2, '0');
      const ringLabel = `Ring ${ringNumber} — ${letter.flavor}`;
      const hasLetter = Boolean(letter.letter);
      const displayDate = hasLetter ? letter.date : 'Soon';
      let lightboxIndex = -1;
      if (hasLetter) {
        lightboxIndex = letterLightboxItems.push({
          src: letter.letter,
          alt: `${ringLabel} love letter`,
          caption: buildLetterCaption(letter),
        }) - 1;
      }
      const articleClasses = `love-card${hasLetter ? '' : ' love-card--upcoming'}`;
      const ariaLabel = hasLetter
        ? `Open ${ringLabel} love letter`
        : `${ringLabel} chapter coming soon`;
      const interactiveAttributes = hasLetter
        ? ` tabindex="0" data-lightbox-collection="letters" data-lightbox-index="${lightboxIndex}"`
        : '';
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
}

function renderGallery() {
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

function findLightboxTrigger(eventTarget) {
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

renderLoveLetters();
renderGallery();
setActiveLightboxCollection('letters');

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

document.addEventListener('keydown', (event) => {
  const loveLightboxVisible = loveLightboxEl && loveLightboxEl.classList.contains('is-visible');
  const heroLightboxVisible = heroLightboxEl && heroLightboxEl.classList.contains('is-visible');
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

if (playlistToggleBtn) {
  playlistToggleBtn.addEventListener('click', () => {
    setPlaylistExpanded(!isPlaylistExpanded);
  });
}

const updateSideNavState = (isCollapsed) => {
  if (sideNavToggleBtn) {
    sideNavToggleBtn.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
    sideNavToggleBtn.setAttribute('aria-label', isCollapsed ? 'Expand navigation' : 'Collapse navigation');
  }
  if (sideNavLogoEl) {
    const nextSrc = isCollapsed ? SIDE_NAV_LOGO_COLLAPSED_SRC : SIDE_NAV_LOGO_DEFAULT_SRC;
    if (sideNavLogoEl.getAttribute('src') !== nextSrc) {
      sideNavLogoEl.setAttribute('src', nextSrc);
    }
  }
};

if (sideNavEl && sideNavToggleBtn) {
  sideNavToggleBtn.addEventListener('click', () => {
    const isCollapsed = document.body.classList.toggle('side-nav-collapsed');
    updateSideNavState(isCollapsed);
  });
}

updateSideNavState(document.body.classList.contains('side-nav-collapsed'));

updateLightboxNavButtons();

const typewriterEls = document.querySelectorAll('[data-typewriter]');
let typewriterStarted = false;

function getTypewriterText(el) {
  if (!(el instanceof HTMLElement)) {
    return '';
  }
  const raw = typeof el.dataset.typewriter === 'string' ? el.dataset.typewriter : '';
  const trimmed = raw.trim();
  if (trimmed) {
    el.dataset.typewriter = trimmed;
    return trimmed;
  }
  const fallback = el.textContent.trim();
  el.dataset.typewriter = fallback;
  return fallback;
}

function animateTypewriter(el) {
  if (!(el instanceof HTMLElement)) {
    return;
  }
  const text = getTypewriterText(el);
  if (!text) {
    el.classList.add('is-complete');
    return;
  }
  const speedValue = Number.parseInt(el.dataset.typewriterSpeed || '', 10);
  const delayValue = Number.parseInt(el.dataset.typewriterDelay || '', 10) || 0;
  const step = Number.isFinite(speedValue) && speedValue > 0 ? speedValue : 90;
  const loopDelayValue = Number.parseInt(el.dataset.typewriterLoopDelay || '', 10);
  const fallbackLoopDelay = Math.max(1600, Math.round(text.length * step * 0.8));
  const loopDelay = Number.isFinite(loopDelayValue) && loopDelayValue >= 0 ? loopDelayValue : fallbackLoopDelay;
  const shouldLoop = el.dataset.typewriterLoop !== 'false';
  el.classList.remove('is-complete');
  const startTyping = () => {
    let index = 0;
    el.textContent = '';
    const typeNext = () => {
      el.textContent = text.slice(0, index + 1);
      index += 1;
      if (index < text.length) {
        setTimeout(typeNext, step);
      } else {
        el.textContent = text;
        el.classList.add('is-complete');
        if (shouldLoop) {
          setTimeout(() => {
            if (!document.body.contains(el)) {
              return;
            }
            animateTypewriter(el);
          }, loopDelay);
        }
      }
    };
    typeNext();
  };
  if (delayValue > 0) {
    setTimeout(startTyping, delayValue);
  } else {
    startTyping();
  }
}

function startTypewriterAnimations() {
  if (typewriterStarted) {
    return;
  }
  typewriterStarted = true;
  typewriterEls.forEach((el) => animateTypewriter(el));
}

// Timeline data (edit dates/labels)
const timelineData = [
  { title: 'Love at the first sight', date: '2025-09-19', note: 'That\'s when the magic begin.' },
  { title: 'First commitment', date: '2025-10-03', note: 'Laughter and butterflies.' },
  { title: 'First date', date: '2025-10-04', note: 'It\'s fun!!.' },
  { title: 'Second date', date: '2025-10-09', note: 'Working together.' },
];

// Quotes rotation (customize freely)
const quotes = [
  'You are my today and all of my tomorrows.',
  'In your smile, I see something more beautiful than the stars.',
  'I love you more than words can express.',
  'Every love story is beautiful, but ours is my favorite.',
  'I choose you. And I will choose you, over and over.',
];

// ======= YouTube background music =======
const yt = document.getElementById('yt');
const playerEl = document.getElementById('player');
const playerStatus = document.getElementById('playerStatus');
const playerTitle = document.getElementById('playerTitle');
const toggleBtn = document.getElementById('toggleMusic');
const prevBtn = document.getElementById('prevTrack');
const nextBtn = document.getElementById('nextTrack');
const playlistEl = document.getElementById('playlist');

setPlaylistExpanded(isPlaylistExpanded);

let isPlaying = false;
let currentTrackIndex = 0;
const unavailableTrackIndexes = new Set();

let ytPlayer = null;
let youTubeScriptRequested = false;
let youTubePlayerReadyResolved = false;
let youTubePlayerReadyResolve;
let pendingTrackSelection = null;

const youTubePlayerReadyPromise = new Promise((resolve) => {
  youTubePlayerReadyResolve = (player) => {
    if (!youTubePlayerReadyResolved) {
      youTubePlayerReadyResolved = true;
      resolve(player);
    }
  };
});

function ensureYouTubeIframeAPIScript() {
  if (window.YT && typeof window.YT.Player === 'function') {
    return;
  }
  if (youTubeScriptRequested) {
    return;
  }
  youTubeScriptRequested = true;
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  tag.async = true;
  document.head.append(tag);
}

function handlePlayerStateChange(event) {
  if (!event || typeof event.data !== 'number' || !PLAYLIST.length) {
    return;
  }
  const PlayerState = window.YT?.PlayerState;
  const playerTarget = event?.target;
  switch (event.data) {
    case PlayerState?.ENDED: {
      const nextIndex = (currentTrackIndex + 1) % PLAYLIST.length;
      selectTrack(nextIndex, { autoplay: true });
      break;
    }
    case PlayerState?.PLAYING: {
      if (!isPlaying) {
        isPlaying = true;
      }
      updatePlayerUI();
      break;
    }
    case PlayerState?.PAUSED: {
      if (isPlaying) {
        isPlaying = false;
      }
      updatePlayerUI();
      break;
    }
    case PlayerState?.CUED: {
      if (isPlaying && playerTarget && typeof playerTarget.playVideo === 'function') {
        playerTarget.playVideo();
      }
      break;
    }
    default:
  }
}

function createYouTubePlayer() {
  if (!yt || ytPlayer) {
    return;
  }
  ytPlayer = new YT.Player('yt', {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
    },
    events: {
      onReady: (event) => {
        ytPlayer = event.target;
        if (typeof youTubePlayerReadyResolve === 'function') {
          youTubePlayerReadyResolve(event.target);
        }
      },
      onStateChange: handlePlayerStateChange,
      onError: handlePlayerError,
    },
  });
}

function ensureYouTubePlayer() {
  if (!yt) {
    return Promise.resolve(null);
  }
  if (ytPlayer && youTubePlayerReadyResolved && typeof ytPlayer.loadVideoById === 'function') {
    return Promise.resolve(ytPlayer);
  }
  ensureYouTubeIframeAPIScript();
  if (window.YT && typeof window.YT.Player === 'function' && !ytPlayer) {
    createYouTubePlayer();
  }
  return youTubePlayerReadyPromise;
}

function applyTrackSelectionToPlayer(player, selection) {
  if (!player || !PLAYLIST.length || !selection) {
    return;
  }
  const { index, autoplay } = selection;
  const track = PLAYLIST[index];
  if (!track) {
    return;
  }
  if (autoplay) {
    player.loadVideoById(track.id);
    if (typeof player.playVideo === 'function') {
      player.playVideo();
    }
  } else if (typeof player.cueVideoById === 'function') {
    player.cueVideoById(track.id);
  } else {
    player.loadVideoById(track.id);
    if (typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  }
}

function flushPendingTrackSelection(player) {
  if (!player || !PLAYLIST.length) {
    return;
  }
  const selection = pendingTrackSelection || { index: currentTrackIndex, autoplay: isPlaying };
  pendingTrackSelection = null;
  applyTrackSelectionToPlayer(player, selection);
}

window.onYouTubeIframeAPIReady = () => {
  if (!yt) {
    if (typeof youTubePlayerReadyResolve === 'function') {
      youTubePlayerReadyResolve(null);
    }
    return;
  }
  createYouTubePlayer();
};

function highlightActiveTrack() {
  if (!playlistEl) {
    return;
  }
  const tracks = playlistEl.querySelectorAll('.player-track');
  tracks.forEach((item, index) => {
    item.classList.toggle('is-active', index === currentTrackIndex);
  });
}

function updateUnavailableTrackUI(index) {
  if (!playlistEl) {
    return;
  }
  const button = playlistEl.querySelector(`button[data-index="${index}"]`);
  if (!button) {
    return;
  }
  const listItem = button.closest('.player-track');
  const isUnavailable = unavailableTrackIndexes.has(index);
  button.disabled = isUnavailable;
  if (listItem) {
    listItem.classList.toggle('is-unavailable', isUnavailable);
  }
}

function findNextPlayableIndex(startIndex, direction = 1) {
  if (!PLAYLIST.length) {
    return null;
  }
  for (let step = 1; step <= PLAYLIST.length; step += 1) {
    const nextIndex = (startIndex + direction * step + PLAYLIST.length) % PLAYLIST.length;
    if (!unavailableTrackIndexes.has(nextIndex)) {
      return nextIndex;
    }
  }
  return null;
}

function escapeHtml(text = '') {
  return text.replace(/[&<>"']/g, (char) => {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return map[char] || char;
  });
}

function updatePlayerUI({ refreshPlaylist = true } = {}) {
  const activeTrack = PLAYLIST[currentTrackIndex];
  if (playerTitle) {
    playerTitle.textContent = activeTrack ? activeTrack.title : 'Select a song';
  }
  if (playerStatus) {
    playerStatus.textContent = isPlaying ? 'Now Playing' : 'Paused';
  }
  if (toggleBtn) {
    toggleBtn.textContent = isPlaying ? 'Pause' : 'Play';
    toggleBtn.setAttribute('aria-pressed', String(isPlaying));
  }
  if (playerEl) {
    playerEl.classList.toggle('is-playing', isPlaying);
  }
  if (refreshPlaylist) {
    renderPlaylist({ preserveScroll: true, preserveFocus: true });
  }
  highlightActiveTrack();
}

function renderPlaylist({ preserveScroll = false, preserveFocus = false } = {}) {
  if (!playlistEl) {
    return;
  }
  const previousScrollTop = preserveScroll ? playlistEl.scrollTop : 0;
  let focusedIndex = null;
  if (preserveFocus) {
    const activeButton = document.activeElement;
    const focusTarget = activeButton?.closest?.('.player-track button');
    if (focusTarget && playlistEl.contains(focusTarget)) {
      const focusIndex = Number.parseInt(focusTarget.dataset.index, 10);
      if (!Number.isNaN(focusIndex)) {
        focusedIndex = focusIndex;
      }
    }
  }
  playlistEl.innerHTML = PLAYLIST.map((track, index) => {
    const number = String(index + 1).padStart(2, '0');
    const isActive = index === currentTrackIndex;
    const isUnavailable = unavailableTrackIndexes.has(index);
    return `
      <li class="player-track${isActive ? ' is-active' : ''}${isUnavailable ? ' is-unavailable' : ''}">
        <button type="button" data-index="${index}"${isUnavailable ? ' disabled' : ''}>
          <span class="track-index">${number}</span>
          <span class="track-title">${escapeHtml(track.title)}</span>
        </button>
      </li>
    `;
  }).join('');
  if (preserveScroll) {
    playlistEl.scrollTop = previousScrollTop;
  }
  if (preserveFocus && focusedIndex !== null) {
    const newFocusTarget = playlistEl.querySelector(`button[data-index="${focusedIndex}"]`);
    if (newFocusTarget) {
      newFocusTarget.focus();
    }
  }

  setPlaylistExpanded(isPlaylistExpanded);
}

function playMusic() {
  if (!PLAYLIST.length) {
    return;
  }
  if (!ytPlayer) {
    selectTrack(currentTrackIndex, { autoplay: true });
    return;
  }
  isPlaying = true;
  updatePlayerUI();
  ensureYouTubePlayer().then((player) => {
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  });
}

function pauseMusic() {
  if (!PLAYLIST.length) {
    return;
  }
  isPlaying = false;
  updatePlayerUI();
  ensureYouTubePlayer().then((player) => {
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  });
}

function selectTrack(index, { autoplay = true } = {}) {
  if (!PLAYLIST[index]) {
    return;
  }
  let targetIndex = index;
  if (unavailableTrackIndexes.has(targetIndex)) {
    const fallbackIndex = findNextPlayableIndex(targetIndex, 1);
    if (fallbackIndex === null) {
      isPlaying = false;
      updatePlayerUI();
      if (playerStatus) {
        playerStatus.textContent = 'No playable tracks available';
      }
      return;
    }
    targetIndex = fallbackIndex;
  }
  currentTrackIndex = targetIndex;
  isPlaying = Boolean(autoplay);
  updatePlayerUI();
  pendingTrackSelection = { index: currentTrackIndex, autoplay: isPlaying };
  ensureYouTubePlayer().then((player) => {
    flushPendingTrackSelection(player);
  });
}

function initMusicAfterGesture() {
  if (!PLAYLIST.length) {
    return;
  }
  selectTrack(currentTrackIndex, { autoplay: true });
}

function markTrackUnavailable(index) {
  if (!PLAYLIST[index]) {
    return;
  }
  unavailableTrackIndexes.add(index);
  updateUnavailableTrackUI(index);
}

function handlePlayerError() {
  if (!PLAYLIST.length) {
    return;
  }
  markTrackUnavailable(currentTrackIndex);
  const nextIndex = findNextPlayableIndex(currentTrackIndex, 1);
  if (nextIndex === null) {
    isPlaying = false;
    updatePlayerUI();
    if (playerStatus) {
      playerStatus.textContent = 'No playable tracks available';
    }
    return;
  }
  if (playerStatus) {
    playerStatus.textContent = 'Skipping unavailable song…';
  }
  selectTrack(nextIndex, { autoplay: true });
}

updatePlayerUI();

if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (!PLAYLIST.length) {
      return;
    }
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (!PLAYLIST.length) {
      return;
    }
    const nextIndex = findNextPlayableIndex(currentTrackIndex, -1);
    if (nextIndex === null) {
      return;
    }
    const shouldAutoplay = isPlaying;
    selectTrack(nextIndex, { autoplay: shouldAutoplay });
  });
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (!PLAYLIST.length) {
      return;
    }
    const nextIndex = findNextPlayableIndex(currentTrackIndex, 1);
    if (nextIndex === null) {
      return;
    }
    const shouldAutoplay = isPlaying;
    selectTrack(nextIndex, { autoplay: shouldAutoplay });
  });
}

if (playlistEl) {
  playlistEl.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-index]');
    if (!button) {
      return;
    }
    const index = Number.parseInt(button.dataset.index, 10);
    if (Number.isNaN(index)) {
      return;
    }
    if (unavailableTrackIndexes.has(index)) {
      return;
    }
    selectTrack(index, { autoplay: true });
  });
}

// ======= Smooth reveal on scroll =======
const revealEls = document.querySelectorAll('.reveal');
let revealObserver = null;

function reveal() {
  if (prefersReducedMotion) {
    return;
  }
  if (!revealObserver) {
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight || 0;
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < viewportHeight * 0.9 && rect.bottom > viewportHeight * 0.08;
      el.classList.toggle('is-visible', isVisible);
      el.classList.toggle('is-hidden', !isVisible);
    });
  }
}

if (!prefersReducedMotion && typeof IntersectionObserver === 'function') {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          entry.target.classList.remove('is-hidden');
        } else {
          entry.target.classList.remove('is-visible');
          entry.target.classList.add('is-hidden');
        }
      });
    },
    { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
  );
  revealEls.forEach((el) => {
    el.classList.add('is-hidden');
    revealObserver.observe(el);
  });
} else {
  revealEls.forEach((el) => {
    el.classList.add('is-visible');
    el.classList.remove('is-hidden');
  });
}

function updateScrollTopButton() {
  if (!scrollTopBtn) {
    return;
  }
  const threshold = Math.max(window.innerHeight * 0.35, 260);
  const shouldShow = window.scrollY > threshold;
  scrollTopBtn.classList.toggle('is-visible', shouldShow);
}

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

function initializeMomentsVideo() {
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
            { once: true }
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
      { once: true }
    );

    momentsVideoEl.addEventListener(
      'error',
      () => {
        revokeUrl();
        applyFallback();
      },
      { once: true }
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
      { rootMargin: '0px 0px -20%' }
    );
    observer.observe(momentsVideoEl);
  } else {
    loadVideo();
  }
}

// ======= Games (Tetris + Chess) =======
const TETRIS_ROWS = 20;
const TETRIS_COLS = 10;
const TETRIS_SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
};

const TETRIS_COLORS = {
  I: '#8fd3ff',
  J: '#9aa7ff',
  L: '#ffc89c',
  O: '#fff3a6',
  S: '#b9f0c6',
  T: '#d6b1ff',
  Z: '#f9a3bb',
};

let activeGameId = 'tetris';
let tetrisCtx = null;
let tetrisBoard = [];
let tetrisPiece = null;
let tetrisScore = 0;
let tetrisDropCounter = 0;
let tetrisDropInterval = 1000;
let tetrisLastTime = 0;
let tetrisAnimationFrame = null;
let tetrisRunning = false;
let tetrisPaused = false;
let tetrisGameOver = false;

const CHESS_STARTING_BOARD = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

let chessBoardState = null;
let chessTurn = 'white';
let chessSelected = null;
let chessMoves = [];
let chessGameOver = false;

function createMatrix(rows, cols, fill = 0) {
  return Array.from({ length: rows }, () => Array(cols).fill(fill));
}

function cloneMatrix(matrix) {
  return matrix.map((row) => row.slice());
}

function createTetrisPiece(type) {
  return {
    matrix: cloneMatrix(TETRIS_SHAPES[type]),
    pos: { x: Math.floor(TETRIS_COLS / 2) - 1, y: 0 },
    type,
  };
}

function randomTetromino() {
  const keys = Object.keys(TETRIS_SHAPES);
  const randomIndex = Math.floor(Math.random() * keys.length);
  return createTetrisPiece(keys[randomIndex]);
}

function drawCell(ctx, x, y, color) {
  const blockSize = Math.floor(tetrisCanvas.width / TETRIS_COLS);
  ctx.fillStyle = color;
  ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.strokeRect(x * blockSize + 0.5, y * blockSize + 0.5, blockSize - 1, blockSize - 1);
}

function drawTetrisBoard() {
  if (!tetrisCtx) {
    return;
  }
  tetrisCtx.clearRect(0, 0, tetrisCanvas.width, tetrisCanvas.height);
  for (let y = 0; y < TETRIS_ROWS; y += 1) {
    for (let x = 0; x < TETRIS_COLS; x += 1) {
      const cell = tetrisBoard[y][x];
      if (cell) {
        drawCell(tetrisCtx, x, y, TETRIS_COLORS[cell]);
      }
    }
  }
  if (tetrisPiece) {
    for (let y = 0; y < tetrisPiece.matrix.length; y += 1) {
      for (let x = 0; x < tetrisPiece.matrix[y].length; x += 1) {
        if (tetrisPiece.matrix[y][x]) {
          const drawX = x + tetrisPiece.pos.x;
          const drawY = y + tetrisPiece.pos.y;
          if (drawY >= 0) {
            drawCell(tetrisCtx, drawX, drawY, TETRIS_COLORS[tetrisPiece.type]);
          }
        }
      }
    }
  }
}

function mergeTetrisPiece() {
  for (let y = 0; y < tetrisPiece.matrix.length; y += 1) {
    for (let x = 0; x < tetrisPiece.matrix[y].length; x += 1) {
      if (tetrisPiece.matrix[y][x]) {
        const boardY = y + tetrisPiece.pos.y;
        const boardX = x + tetrisPiece.pos.x;
        if (boardY >= 0 && boardY < TETRIS_ROWS && boardX >= 0 && boardX < TETRIS_COLS) {
          tetrisBoard[boardY][boardX] = tetrisPiece.type;
        }
      }
    }
  }
}

function tetrisCollides(pos = tetrisPiece.pos, matrix = tetrisPiece.matrix) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (!matrix[y][x]) {
        continue;
      }
      const boardY = y + pos.y;
      const boardX = x + pos.x;
      if (boardX < 0 || boardX >= TETRIS_COLS || boardY >= TETRIS_ROWS) {
        return true;
      }
      if (boardY >= 0 && tetrisBoard[boardY][boardX]) {
        return true;
      }
    }
  }
  return false;
}

function rotateMatrix(matrix, direction) {
  const size = matrix.length;
  const result = matrix.map((row, rowIndex) => row.map((_, colIndex) => matrix[size - colIndex - 1][rowIndex]));
  if (direction > 0) {
    return result;
  }
  return result.map((row) => row.reverse());
}

function tetrisRotate(direction) {
  if (!tetrisPiece) {
    return;
  }
  const rotated = rotateMatrix(tetrisPiece.matrix, direction);
  const originalX = tetrisPiece.pos.x;
  let offset = 0;
  while (tetrisCollides({ x: tetrisPiece.pos.x + offset, y: tetrisPiece.pos.y }, rotated)) {
    offset = offset ? -(offset + Math.sign(offset)) : 1;
    if (Math.abs(offset) > rotated[0].length) {
      return;
    }
  }
  tetrisPiece.matrix = rotated;
  tetrisPiece.pos.x += offset;
}

function clearTetrisLines() {
  let lines = 0;
  for (let y = TETRIS_ROWS - 1; y >= 0; y -= 1) {
    if (tetrisBoard[y].every((cell) => cell)) {
      const removed = tetrisBoard.splice(y, 1)[0];
      removed.fill(0);
      tetrisBoard.unshift(removed);
      lines += 1;
      y += 1;
    }
  }
  if (lines > 0) {
    const scores = [0, 100, 300, 700, 1500];
    tetrisScore += scores[Math.min(lines, scores.length - 1)];
    tetrisDropInterval = Math.max(250, tetrisDropInterval - lines * 20);
    updateTetrisScoreboard();
  }
}

function updateTetrisScoreboard() {
  if (tetrisScoreEl) {
    tetrisScoreEl.textContent = String(tetrisScore);
  }
  if (gameStats.tetrisBest == null) {
    gameStats.tetrisBest = 0;
  }
  if (tetrisScore > gameStats.tetrisBest) {
    gameStats = { ...gameStats, tetrisBest: tetrisScore };
    persistGameStats(gameStats);
  }
  if (tetrisBestEl) {
    tetrisBestEl.textContent = String(gameStats.tetrisBest || 0);
  }
}

function resetTetrisBoard() {
  tetrisBoard = createMatrix(TETRIS_ROWS, TETRIS_COLS, 0);
}

function spawnTetrisPiece() {
  tetrisPiece = randomTetromino();
  tetrisPiece.pos.y = -1;
  tetrisPiece.pos.x = Math.floor(TETRIS_COLS / 2) - Math.ceil(tetrisPiece.matrix[0].length / 2);
  if (tetrisCollides()) {
    tetrisRunning = false;
    tetrisGameOver = true;
    updateTetrisScoreboard();
  }
}

function playerDrop() {
  if (!tetrisPiece) {
    return;
  }
  tetrisPiece.pos.y += 1;
  if (tetrisCollides()) {
    tetrisPiece.pos.y -= 1;
    mergeTetrisPiece();
    clearTetrisLines();
    spawnTetrisPiece();
  }
  tetrisDropCounter = 0;
}

function hardDrop() {
  if (!tetrisPiece) {
    return;
  }
  while (!tetrisCollides({ x: tetrisPiece.pos.x, y: tetrisPiece.pos.y + 1 })) {
    tetrisPiece.pos.y += 1;
  }
  playerDrop();
}

function playerMove(direction) {
  if (!tetrisPiece) {
    return;
  }
  tetrisPiece.pos.x += direction;
  if (tetrisCollides()) {
    tetrisPiece.pos.x -= direction;
  }
}

function updateTetris(time = 0) {
  if (!tetrisRunning) {
    return;
  }
  tetrisAnimationFrame = window.requestAnimationFrame(updateTetris);
  const delta = time - tetrisLastTime;
  tetrisLastTime = time;
  if (tetrisPaused) {
    tetrisDropCounter = 0;
    drawTetrisBoard();
    return;
  }
  tetrisDropCounter += delta;
  if (tetrisDropCounter > tetrisDropInterval) {
    playerDrop();
  }
  drawTetrisBoard();
  if (tetrisGameOver) {
    window.cancelAnimationFrame(tetrisAnimationFrame);
  }
}

function startTetrisGame() {
  if (!tetrisCtx) {
    return;
  }
  tetrisScore = 0;
  tetrisDropInterval = 1000;
  tetrisDropCounter = 0;
  tetrisLastTime = 0;
  tetrisGameOver = false;
  resetTetrisBoard();
  spawnTetrisPiece();
  updateTetrisScoreboard();
  tetrisRunning = true;
  tetrisPaused = activeGameId !== 'tetris';
  if (tetrisAnimationFrame) {
    window.cancelAnimationFrame(tetrisAnimationFrame);
  }
  updateTetris(0);
}

function handleTetrisKeydown(event) {
  if (!tetrisRunning || tetrisGameOver || activeGameId !== 'tetris') {
    return;
  }
  switch (event.key) {
    case 'ArrowLeft':
      event.preventDefault();
      playerMove(-1);
      break;
    case 'ArrowRight':
      event.preventDefault();
      playerMove(1);
      break;
    case 'ArrowDown':
      event.preventDefault();
      playerDrop();
      break;
    case 'ArrowUp':
      event.preventDefault();
      tetrisRotate(1);
      break;
    case ' ': {
      event.preventDefault();
      hardDrop();
      break;
    }
    default:
  }
}

function isValidChessBoard(board) {
  return Array.isArray(board) && board.length === 8 && board.every((row) => Array.isArray(row) && row.length === 8);
}

function initializeChessState() {
  const storedBoard = gameStats.chessBoard;
  if (isValidChessBoard(storedBoard)) {
    chessBoardState = storedBoard.map((row) => row.slice());
  } else {
    chessBoardState = CHESS_STARTING_BOARD.map((row) => row.slice());
  }
  chessTurn = gameStats.chessTurn === 'black' ? 'black' : 'white';
  chessSelected = null;
  chessMoves = [];
  chessGameOver = false;
}

function getPieceColor(piece) {
  if (!piece) {
    return null;
  }
  return piece === piece.toUpperCase() ? 'white' : 'black';
}

function isOnBoard(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

function addSlideMoves(board, row, col, color, deltas, moves) {
  deltas.forEach(([dRow, dCol]) => {
    let currentRow = row + dRow;
    let currentCol = col + dCol;
    while (isOnBoard(currentRow, currentCol)) {
      const target = board[currentRow][currentCol];
      if (!target) {
        moves.push({ row: currentRow, col: currentCol, capture: false });
      } else {
        if (getPieceColor(target) !== color) {
          moves.push({ row: currentRow, col: currentCol, capture: true });
        }
        break;
      }
      currentRow += dRow;
      currentCol += dCol;
    }
  });
}

function getValidChessMoves(board, row, col, turn) {
  const piece = board[row][col];
  if (!piece) {
    return [];
  }
  const color = getPieceColor(piece);
  if (turn && color !== turn) {
    return [];
  }
  const moves = [];
  const lower = piece.toLowerCase();
  if (lower === 'p') {
    const direction = color === 'white' ? -1 : 1;
    const startRow = color === 'white' ? 6 : 1;
    const oneStepRow = row + direction;
    if (isOnBoard(oneStepRow, col) && !board[oneStepRow][col]) {
      moves.push({ row: oneStepRow, col, capture: false });
      const twoStepRow = row + direction * 2;
      if (row === startRow && !board[twoStepRow][col]) {
        moves.push({ row: twoStepRow, col, capture: false });
      }
    }
    [col - 1, col + 1].forEach((targetCol) => {
      const targetRow = row + direction;
      if (!isOnBoard(targetRow, targetCol)) {
        return;
      }
      const targetPiece = board[targetRow][targetCol];
      if (targetPiece && getPieceColor(targetPiece) !== color) {
        moves.push({ row: targetRow, col: targetCol, capture: true });
      }
    });
    return moves;
  }
  if (lower === 'n') {
    const knightSteps = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];
    knightSteps.forEach(([dRow, dCol]) => {
      const targetRow = row + dRow;
      const targetCol = col + dCol;
      if (!isOnBoard(targetRow, targetCol)) {
        return;
      }
      const target = board[targetRow][targetCol];
      if (!target || getPieceColor(target) !== color) {
        moves.push({ row: targetRow, col: targetCol, capture: Boolean(target) });
      }
    });
    return moves;
  }
  if (lower === 'k') {
    for (let dRow = -1; dRow <= 1; dRow += 1) {
      for (let dCol = -1; dCol <= 1; dCol += 1) {
        if (dRow === 0 && dCol === 0) {
          continue;
        }
        const targetRow = row + dRow;
        const targetCol = col + dCol;
        if (!isOnBoard(targetRow, targetCol)) {
          continue;
        }
        const target = board[targetRow][targetCol];
        if (!target || getPieceColor(target) !== color) {
          moves.push({ row: targetRow, col: targetCol, capture: Boolean(target) });
        }
      }
    }
    return moves;
  }
  if (lower === 'b' || lower === 'q') {
    addSlideMoves(board, row, col, color, [
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ], moves);
  }
  if (lower === 'r' || lower === 'q') {
    addSlideMoves(board, row, col, color, [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ], moves);
  }
  return moves;
}

function pieceToGlyph(piece) {
  switch (piece) {
    case 'K':
      return '♔';
    case 'Q':
      return '♕';
    case 'R':
      return '♖';
    case 'B':
      return '♗';
    case 'N':
      return '♘';
    case 'P':
      return '♙';
    case 'k':
      return '♚';
    case 'q':
      return '♛';
    case 'r':
      return '♜';
    case 'b':
      return '♝';
    case 'n':
      return '♞';
    case 'p':
      return '♟';
    default:
      return '';
  }
}

function moveChessPiece(board, fromRow, fromCol, toRow, toCol) {
  const piece = board[fromRow][fromCol];
  board[fromRow][fromCol] = '';
  board[toRow][toCol] = piece;
  if (piece === 'P' && toRow === 0) {
    board[toRow][toCol] = 'Q';
  } else if (piece === 'p' && toRow === 7) {
    board[toRow][toCol] = 'q';
  }
}

function updateChessScoreboard() {
  if (chessWinsEl) {
    chessWinsEl.textContent = String(gameStats.chessWins || 0);
  }
  if (chessLossesEl) {
    chessLossesEl.textContent = String(gameStats.chessLosses || 0);
  }
}

function setChessStatus(message) {
  if (chessStatusEl) {
    chessStatusEl.textContent = message;
  }
}

function renderChessBoard() {
  if (!chessBoardEl) {
    return;
  }
  chessBoardEl.innerHTML = '';
  chessBoardState.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      const cell = document.createElement('div');
      cell.className = `chess-cell ${(rowIndex + colIndex) % 2 === 0 ? 'is-light' : 'is-dark'}`;
      cell.dataset.pos = `${rowIndex}-${colIndex}`;
      cell.setAttribute('role', 'gridcell');
      const glyph = pieceToGlyph(piece);
      if (glyph) {
        const span = document.createElement('span');
        span.textContent = glyph;
        span.setAttribute('aria-hidden', 'true');
        cell.append(span);
        cell.setAttribute('aria-label', `${getPieceColor(piece)} ${piece.toLowerCase()}`);
      } else {
        const span = document.createElement('span');
        span.textContent = '';
        span.setAttribute('aria-hidden', 'true');
        cell.append(span);
        cell.setAttribute('aria-label', 'Empty square');
      }
      if (chessSelected && chessSelected.row === rowIndex && chessSelected.col === colIndex) {
        cell.classList.add('is-highlight');
      }
      if (chessMoves.some((move) => move.row === rowIndex && move.col === colIndex)) {
        cell.classList.add('is-move');
      }
      chessBoardEl.append(cell);
    });
  });
}

function findPiece(board, target) {
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      if (board[row][col] === target) {
        return true;
      }
    }
  }
  return false;
}

function saveChessState() {
  gameStats = {
    ...gameStats,
    chessBoard: chessBoardState.map((row) => row.slice()),
    chessTurn,
  };
  persistGameStats(gameStats);
}

function handlePlayerWin() {
  gameStats = { ...gameStats, chessWins: (gameStats.chessWins || 0) + 1 };
  chessGameOver = true;
  updateChessScoreboard();
  setChessStatus('Checkmate! You won this round.');
  persistGameStats(gameStats);
}

function handlePlayerLoss() {
  gameStats = { ...gameStats, chessLosses: (gameStats.chessLosses || 0) + 1 };
  chessGameOver = true;
  updateChessScoreboard();
  setChessStatus('Our bunny rival won this time. Try again!');
  persistGameStats(gameStats);
}

function performAiMove() {
  if (chessGameOver) {
    return;
  }
  const aiMoves = [];
  for (let row = 0; row < 8; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const piece = chessBoardState[row][col];
      if (piece && getPieceColor(piece) === 'black') {
        const moves = getValidChessMoves(chessBoardState, row, col, 'black');
        moves.forEach((move) => {
          aiMoves.push({ fromRow: row, fromCol: col, ...move });
        });
      }
    }
  }
  if (!aiMoves.length) {
    handlePlayerWin();
    saveChessState();
    renderChessBoard();
    return;
  }
  const captureMoves = aiMoves.filter((move) => move.capture);
  const movePool = captureMoves.length ? captureMoves : aiMoves;
  const selectedMove = movePool[Math.floor(Math.random() * movePool.length)];
  moveChessPiece(chessBoardState, selectedMove.fromRow, selectedMove.fromCol, selectedMove.row, selectedMove.col);
  if (!findPiece(chessBoardState, 'K')) {
    handlePlayerLoss();
  }
  chessTurn = 'white';
  chessSelected = null;
  chessMoves = [];
  saveChessState();
  renderChessBoard();
  if (!chessGameOver) {
    setChessStatus('Your turn! Choose your next move.');
  }
}

function completePlayerMove(targetRow, targetCol) {
  if (!chessSelected) {
    return;
  }
  moveChessPiece(chessBoardState, chessSelected.row, chessSelected.col, targetRow, targetCol);
  if (!findPiece(chessBoardState, 'k')) {
    handlePlayerWin();
    saveChessState();
    renderChessBoard();
    return;
  }
  chessTurn = 'black';
  chessSelected = null;
  chessMoves = [];
  saveChessState();
  renderChessBoard();
  if (!chessGameOver) {
    setChessStatus('Bunny rival is thinking...');
    window.setTimeout(performAiMove, 520);
  }
}

function handleChessBoardClick(event) {
  if (!chessBoardEl || chessGameOver || chessTurn !== 'white') {
    return;
  }
  const cell = event.target.closest('.chess-cell');
  if (!cell) {
    return;
  }
  const [row, col] = cell.dataset.pos.split('-').map((value) => Number.parseInt(value, 10));
  if (!Number.isInteger(row) || !Number.isInteger(col)) {
    return;
  }
  if (chessSelected && chessMoves.some((move) => move.row === row && move.col === col)) {
    completePlayerMove(row, col);
    return;
  }
  const piece = chessBoardState[row][col];
  if (piece && getPieceColor(piece) === 'white') {
    chessSelected = { row, col };
    chessMoves = getValidChessMoves(chessBoardState, row, col, 'white');
    renderChessBoard();
  } else {
    chessSelected = null;
    chessMoves = [];
    renderChessBoard();
  }
}

function resetChessGame() {
  chessBoardState = CHESS_STARTING_BOARD.map((row) => row.slice());
  chessTurn = 'white';
  chessSelected = null;
  chessMoves = [];
  chessGameOver = false;
  saveChessState();
  renderChessBoard();
  setChessStatus('Ready for a friendly duel.');
}

function setActiveGame(gameId) {
  activeGameId = gameId;
  gamesTabEls.forEach((tab) => {
    const isActive = tab.dataset.game === gameId;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  gamePanelEls.forEach((panel) => {
    const isActive = panel.dataset.gamePanel === gameId;
    panel.classList.toggle('is-active', isActive);
    panel.toggleAttribute('hidden', !isActive);
  });
  tetrisPaused = gameId !== 'tetris';
}

function initializeGames() {
  if (gamesTabEls.length) {
    gamesTabEls.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetGame = tab.dataset.game;
        if (targetGame) {
          setActiveGame(targetGame);
          if (targetGame === 'chess' && !chessGameOver && chessTurn === 'black') {
            setChessStatus('Bunny rival is thinking...');
            window.setTimeout(performAiMove, 400);
          }
        }
      });
    });
  }
  if (tetrisCanvas) {
    tetrisCtx = tetrisCanvas.getContext('2d');
    resetTetrisBoard();
    drawTetrisBoard();
    updateTetrisScoreboard();
    if (tetrisStartBtn) {
      tetrisStartBtn.addEventListener('click', () => {
        startTetrisGame();
      });
    }
    window.addEventListener('keydown', handleTetrisKeydown);
  }
  if (chessBoardEl) {
    initializeChessState();
    updateChessScoreboard();
    renderChessBoard();
    if (chessTurn === 'black' && !chessGameOver) {
      setChessStatus('Bunny rival is thinking...');
      window.setTimeout(performAiMove, 600);
    } else {
      setChessStatus('Ready for a friendly duel.');
    }
    chessBoardEl.addEventListener('click', handleChessBoardClick);
    if (chessRestartBtn) {
      chessRestartBtn.addEventListener('click', () => {
        resetChessGame();
      });
    }
  }
  setActiveGame('tetris');
}

// ======= Timeline render =======
const tList = document.getElementById('timelineList');
let timelineDetailsEl = null;
let activeTimelineIndex = 0;
function formatDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

function createRoadmapBadge(index, total) {
  if (index === 0) {
    return 'Start';
  }
  if (index === total - 1) {
    return 'Finish';
  }
  return `Step ${index + 1}`;
}

function updateTimelineDetails() {
  if (!timelineDetailsEl || !timelineData.length) {
    return;
  }
  const current = timelineData[Math.max(0, Math.min(activeTimelineIndex, timelineData.length - 1))];
  if (!current) {
    timelineDetailsEl.textContent = '';
    return;
  }
  const detailNote = current.note?.trim()
    ? current.note
    : 'We are still writing this beautiful chapter together.';
  timelineDetailsEl.innerHTML = `
    <strong>${formatDate(current.date)} — ${current.title}</strong>
    <p style="margin-top: 10px;">${detailNote}</p>
  `;
}

function updateActiveRoadmapStop() {
  if (!tList) {
    return;
  }
  const buttons = Array.from(tList.querySelectorAll('.roadmap-stop'));
  buttons.forEach((btn) => {
    const index = Number.parseInt(btn.dataset.index, 10);
    const isActive = index === activeTimelineIndex;
    btn.classList.toggle('is-active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    if (isActive) {
      btn.setAttribute('aria-current', 'step');
    } else {
      btn.removeAttribute('aria-current');
    }
  });
  updateTimelineDetails();
}

function focusRoadmapStop(targetIndex) {
  if (!tList) {
    return;
  }
  const buttons = Array.from(tList.querySelectorAll('.roadmap-stop'));
  if (!buttons.length) {
    return;
  }
  const total = buttons.length;
  const normalized = ((targetIndex % total) + total) % total;
  buttons[normalized].focus();
}

function handleRoadmapKeydown(event) {
  const target = event.currentTarget;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  const index = Number.parseInt(target.dataset.index, 10);
  if (Number.isNaN(index)) {
    return;
  }
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    event.preventDefault();
    activeTimelineIndex = Math.min(index + 1, timelineData.length - 1);
    updateActiveRoadmapStop();
    focusRoadmapStop(activeTimelineIndex);
  } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
    event.preventDefault();
    activeTimelineIndex = Math.max(index - 1, 0);
    updateActiveRoadmapStop();
    focusRoadmapStop(activeTimelineIndex);
  }
}

function renderTimeline() {
  if (!tList) {
    return;
  }
  const total = timelineData.length;
  const stopsMarkup = timelineData
    .map((item, index) => `
        <button type="button" class="roadmap-stop" data-index="${index}" role="listitem">
          <span class="roadmap-stop__badge">${createRoadmapBadge(index, total)}</span>
          <span class="roadmap-stop__title">${item.title}</span>
          <span class="roadmap-stop__date">${formatDate(item.date)}</span>
          ${item.note ? `<span class="roadmap-stop__note">${item.note}</span>` : ''}
        </button>
      `)
    .join('');
  tList.innerHTML = `
    <div class="timeline-roadmap" role="list">
      ${stopsMarkup}
    </div>
    <div class="timeline-details" id="timelineDetails" role="status" aria-live="polite"></div>
  `;
  timelineDetailsEl = document.getElementById('timelineDetails');
  const stopButtons = Array.from(tList.querySelectorAll('.roadmap-stop'));
  stopButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number.parseInt(button.dataset.index, 10);
      if (!Number.isNaN(index)) {
        activeTimelineIndex = index;
        updateActiveRoadmapStop();
      }
    });
    button.addEventListener('keydown', handleRoadmapKeydown);
  });
  updateActiveRoadmapStop();
}

renderTimeline();
initializeGames();
initializeMomentsVideo();

// ======= Quotes rotation =======
const quoteBox = document.getElementById('quoteBox');
let qIndex = 0;
if (quoteBox) {
  setInterval(() => {
    qIndex = (qIndex + 1) % quotes.length;
    quoteBox.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 0, transform: 'translateY(-6px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 800, easing: 'ease' }
    );
    window.setTimeout(() => {
      quoteBox.textContent = `"${quotes[qIndex]}"`;
    }, 350);
  }, 5000);
}

window.addEventListener(
  'scroll',
  () => {
    updateScrollTopButton();
    if (!revealObserver) {
      reveal();
    }
  },
  { passive: true }
);

window.addEventListener('resize', () => {
  updateScrollTopButton();
  if (!revealObserver) {
    reveal();
  }
});

startTypewriterAnimations();
updateScrollTopButton();
reveal();

const requestAutoplayAfterGesture = () => {
  initMusicAfterGesture();
  window.removeEventListener('pointerdown', requestAutoplayAfterGesture);
  window.removeEventListener('keydown', requestAutoplayAfterGesture);
};

window.addEventListener('pointerdown', requestAutoplayAfterGesture, { once: true });
window.addEventListener('keydown', requestAutoplayAfterGesture, { once: true });

// ======= Heart particles =======
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w, h, hearts;

function resize() {
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}
addEventListener('resize', resize);
resize();

function makeHeart() {
  const size = Math.random() * 10 + 6;
  return {
    x: Math.random() * w,
    y: h + Math.random() * h * 0.2,
    size,
    alpha: Math.random() * 0.7 + 0.25,
    speed: Math.random() * 0.6 + 0.25,
    drift: (Math.random() - 0.5) * 0.6,
  };
}
hearts = Array.from({ length: 80 }, makeHeart);

function drawHeart(x, y, s, a) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s / 16, s / 16);
  ctx.globalAlpha = a;
  ctx.fillStyle = '#f5c0c7';
  ctx.beginPath();
  ctx.moveTo(0, 6);
  ctx.bezierCurveTo(0, 0, -8, -4, -8, -10);
  ctx.bezierCurveTo(-8, -16, -2, -16, 0, -12);
  ctx.bezierCurveTo(2, -16, 8, -16, 8, -10);
  ctx.bezierCurveTo(8, -4, 0, 0, 0, 6);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function tick() {
  ctx.clearRect(0, 0, w, h);
  for (const p of hearts) {
    p.y -= p.speed;
    p.x += p.drift;
    p.alpha -= 0.0009;
    drawHeart(p.x, p.y, p.size, Math.max(p.alpha, 0));
    if (p.y < -20 || p.alpha <= 0) {
      Object.assign(p, makeHeart());
    }
  }
  requestAnimationFrame(tick);
}
tick();
