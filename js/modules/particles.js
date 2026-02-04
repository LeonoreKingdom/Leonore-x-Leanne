const canvas = document.getElementById('particles');
let ctx = null;
let w = 0;
let h = 0;
let hearts = [];

function resize() {
  if (!canvas) return;
  w = canvas.width = innerWidth;
  h = canvas.height = innerHeight;
}

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

function drawHeart(x, y, s, a) {
  if (!ctx) return;
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
  if (!ctx) return;
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

export function initParticles() {
  if (!canvas) return;

  ctx = canvas.getContext('2d');
  addEventListener('resize', resize);
  resize();
  hearts = Array.from({ length: 80 }, makeHeart);
  tick();
}
