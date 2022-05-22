'use strict';
const d = document;
const ls = localStorage;
export default function darkMode(input, darkSection) {
  const _input = d.querySelector(input);
  const _darkSection = d.querySelector(darkSection);

  _input.checked = JSON.parse(ls.getItem('mode'));
  function updateSection() {
    if (_input.checked) {
      _darkSection.style.background = 'black';
    } else {
      _darkSection.style.background = 'lightgray';
    }
  }

  _input.addEventListener('input', () => {
    updateSection();
    updateLS();
  });

  function updateLS() {
    ls.setItem('mode', JSON.stringify(_input.checked));
  }
}
