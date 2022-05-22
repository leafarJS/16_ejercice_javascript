'use strict';
const d = document;
const w = window;
const kits = ['crash', 'kick', 'snare', 'tom'];

export default function drumKits(container) {
  const _container = d.querySelector(container);
  kits.forEach((el) => {
    const btnEl = d.createElement('button');
    btnEl.classList.add('btn-drum');
    btnEl.style.backgroundImage = `url(/assets/images/${el}.png)`;
    btnEl.innerText = el;
    _container.appendChild(btnEl);
    const audioEl = d.createElement('audio');
    audioEl.src = `assets/sounds/${el}.mp3`;
    _container.appendChild(audioEl);
    btnEl.addEventListener('click', () => {
      audioEl.play();
    });
    w.addEventListener('keydown', (e) => {
      if (e.key === el.slice(0, 1)) {
        audioEl.play();
        btnEl.style.transform = 'scale(.9)';
        setTimeout(() => {
          btnEl.style.transform = 'scale(1)';
        }, 100);
      }
    });
  });
}
