'use strict';
const d = document;

export default function heart(heart) {
  const _heart = d.querySelector(heart);
  _heart.addEventListener('mousemove', (e) => {
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    const span = d.createElement('span');
    span.style.left = xPos + 'px';
    span.style.top = yPos + 'px';

    const size = Math.random() * 100;

    span.style.width = size + 'px';
    span.style.height = size + 'px';

    _heart.appendChild(span);
    setTimeout(() => {
      span.remove();
    }, 3000);
  });
}
