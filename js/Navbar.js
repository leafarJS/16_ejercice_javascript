'use strict';
const d = document;
const w = window;
export default function navBar(navbar, bottom) {
  const _navBar = d.querySelector(navbar);
  const _bottom = d.querySelector(bottom);

  w.addEventListener('scroll', (e) => {
    if (w.scrollY > _bottom.offsetTop - _navBar.offsetHeight - 50) {
      _navBar.classList.add('active');
    } else {
      _navBar.classList.remove('active');
    }
  });
}
