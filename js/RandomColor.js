'use strict';
const d = document;
const colorRandom = () => {
  const chars = '0123456789abcdef';
  const colorLength = 6;
  let colorCode = '#';
  for (let i = 0; i < colorLength; i++) {
    const randomNum = Math.floor(Math.random() * chars.length);

    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
};

export default function randomColor(container) {
  const _container = d.querySelector(container);

  for (let i = 0; i < 30; i++) {
    const colorContainer = d.createElement('div');
    colorContainer.classList.add('random-color-content');
    _container.appendChild(colorContainer);
  }
  const _containers = d.querySelectorAll('.random-color-content');

  function generateColors() {
    _containers.forEach((el) => {
      const newColor = colorRandom();
      el.style.backgroundColor = newColor;
      el.innerText = newColor;
    });
  }

  generateColors();
}
