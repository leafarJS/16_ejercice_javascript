'use strict';

const d = document;

export default function sliderImg(container) {
  const _container = d.querySelector(container);
  const _imgs = d.querySelectorAll('.image-container-slider img');
  let currentImg = 1;

  d.addEventListener('click', (e) => {
    if (e.target.matches('.next-slider')) {
      if (currentImg >= _imgs.length) {
        console.log(currentImg, _imgs.length);
        currentImg = 1;
      }
      _container.style.transform = `translateX(-${(currentImg - 1) * 500}px`;
      currentImg++;
    }

    if (e.target.matches('.prev-slider')) {
      if (currentImg < 1) {
        currentImg = _imgs.length;
      }
      _container.style.transform = `translateX(-${(currentImg - 1) * 500}px`;
      currentImg--;
    }
  });
}
