import { GAME_STATS_KEY } from './config.js';

// ======= Storage utilities =======
export const storageAvailable = (() => {
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

export function loadGameStats() {
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

export function persistGameStats(stats) {
  if (!storageAvailable) {
    return;
  }
  try {
    window.localStorage.setItem(GAME_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    console.warn('Unable to save game stats', error);
  }
}

// ======= General utilities =======
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function escapeHtml(text = '') {
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

export function formatDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' });
}

// ======= Matrix utilities =======
export function createMatrix(rows, cols, fill = 0) {
  return Array.from({ length: rows }, () => Array(cols).fill(fill));
}

export function cloneMatrix(matrix) {
  return matrix.map((row) => row.slice());
}

// ======= Reduce motion preference =======
export const reduceMotionQuery = typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

export let prefersReducedMotion = Boolean(reduceMotionQuery?.matches);

const reduceMotionSubscribers = [];

export function emitReduceMotionPreferenceChange(matches) {
  reduceMotionSubscribers.forEach((callback) => {
    try {
      callback(matches);
    } catch (error) {
      console.error('Error in reduce motion subscriber', error);
    }
  });
}

export function onReduceMotionPreferenceChange(callback) {
  if (typeof callback === 'function') {
    reduceMotionSubscribers.push(callback);
  }
}

export function setPrefersReducedMotion(value) {
  prefersReducedMotion = value;
}

// Initialize reduce motion listener
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
