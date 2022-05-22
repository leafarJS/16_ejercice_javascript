'use strict';
const d = document;

export default function videoPopup(btn, video) {
  const _video = d.querySelector(video);
  //const _close = d.querySelector(close);
  d.addEventListener('click', (e) => {
    if (e.target.matches(btn)) {
      _video.classList.toggle('active');
      _video.pause;
      _video.currentTime = 0;
    }
    if (e.target.matches('.close-icon')) {
      _video.classList.add('active');
    }
  });
}
