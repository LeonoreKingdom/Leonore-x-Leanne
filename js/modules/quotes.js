import { quotes } from './config.js';

const quoteBox = document.getElementById('quoteBox');
let qIndex = 0;

export function initQuotes() {
  if (!quoteBox) {
    return;
  }

  setInterval(() => {
    qIndex = (qIndex + 1) % quotes.length;
    quoteBox.animate(
      [
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 0, transform: 'translateY(-6px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 800, easing: 'ease' },
    );
    window.setTimeout(() => {
      quoteBox.textContent = `"${quotes[qIndex]}"`;
    }, 350);
  }, 5000);
}
