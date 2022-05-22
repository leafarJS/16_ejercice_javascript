'use strict';
const d = document;
const addNewImages = (container) => {
  let imageNum = 9;
  for (let i = 0; i < imageNum; i++) {
    const newImage = d.createElement('img');
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    container.appendChild(newImage);
  }
};

export default function randomPhoto(container, btn) {
  const _container = d.querySelector(container);
  const _btn = d.querySelector(btn);
  _btn.addEventListener('click', (e) => {
    addNewImages(_container);
  });
}
