'use strict';
const d = document;

export default function backgroundPopup(
  btnBg,
  containerBg,
  containerPop,
  btnCl
) {
  const _containerBg = d.querySelector(containerBg);
  const _containerPop = d.querySelector(containerPop);
  d.addEventListener('click', (e) => {
    if (e.target.matches(btnBg)) {
      _containerBg.classList.toggle('active');
      _containerPop.classList.toggle('active');
    }
    if (e.target.matches(btnCl)) {
      _containerBg.classList.toggle('active');
      _containerPop.classList.toggle('active');
    }
  });
}
