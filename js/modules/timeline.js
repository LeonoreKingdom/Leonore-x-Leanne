import { timelineData } from './config.js';
import { formatDate } from './utils.js';

const tList = document.getElementById('timelineList');
let timelineDetailsEl = null;
let activeTimelineIndex = 0;

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
  const detailNote = current.note?.trim() ? current.note : 'We are still writing this beautiful chapter together.';
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

export function renderTimeline() {
  if (!tList) {
    return;
  }
  const total = timelineData.length;
  const stopsMarkup = timelineData
    .map(
      (item, index) => `
        <button type="button" class="roadmap-stop" data-index="${index}" role="listitem">
          <span class="roadmap-stop__badge">${createRoadmapBadge(index, total)}</span>
          <span class="roadmap-stop__title">${item.title}</span>
          <span class="roadmap-stop__date">${formatDate(item.date)}</span>
          ${item.note ? `<span class="roadmap-stop__note">${item.note}</span>` : ''}
        </button>
      `,
    )
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

export function initTimeline() {
  renderTimeline();
}
