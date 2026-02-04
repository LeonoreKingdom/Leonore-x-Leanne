import { SIDE_NAV_LOGO_DEFAULT_SRC, SIDE_NAV_LOGO_COLLAPSED_SRC } from './config.js';
import { prefersReducedMotion } from './utils.js';

// DOM Elements
const sideNavEl = document.getElementById('sideNav');
const sideNavToggleBtn = document.getElementById('sideNavToggle');
const sideNavLogoEl = document.getElementById('sideNavLogo');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const typewriterEls = document.querySelectorAll('[data-typewriter]');

// State
let typewriterStarted = false;

// Side navigation
function updateSideNavState(isCollapsed) {
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
}

// Scroll to top button
export function updateScrollTopButton() {
  if (!scrollTopBtn) {
    return;
  }
  const threshold = Math.max(window.innerHeight * 0.35, 260);
  const shouldShow = window.scrollY > threshold;
  scrollTopBtn.classList.toggle('is-visible', shouldShow);
}

// Typewriter animation
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

export function startTypewriterAnimations() {
  if (typewriterStarted) {
    return;
  }
  typewriterStarted = true;
  typewriterEls.forEach((el) => animateTypewriter(el));
}

// Reveal animations
const revealEls = document.querySelectorAll('.reveal');
let revealObserver = null;

export function reveal() {
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

export function initNavigation() {
  // Side nav toggle
  if (sideNavEl && sideNavToggleBtn) {
    sideNavToggleBtn.addEventListener('click', () => {
      const isCollapsed = document.body.classList.toggle('side-nav-collapsed');
      updateSideNavState(isCollapsed);
    });
  }

  updateSideNavState(document.body.classList.contains('side-nav-collapsed'));

  // Scroll to top button
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // Reveal observer
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
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' },
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

  // Window event listeners
  window.addEventListener(
    'scroll',
    () => {
      updateScrollTopButton();
      if (!revealObserver) {
        reveal();
      }
    },
    { passive: true },
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
}
