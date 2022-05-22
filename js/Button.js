'use strict';
const d = document;

export default function buttonAwesome(btn) {
  const _btn = d.querySelector(btn);

  _btn.addEventListener('mouseover', (e) => {
    const x = e.pageX - _btn.offsetLeft;
    const y = e.pageY - _btn.offsetTop;
    _btn.style.setProperty('--xPos', x + 'px');
    _btn.style.setProperty('--yPos', y + 'px');
  });
}
