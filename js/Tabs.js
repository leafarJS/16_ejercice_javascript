'use strict';
const d = document;

export default function tabs(tabs, btn, article) {
  const _tabs = d.querySelector(tabs);
  const _btns = d.querySelectorAll(btn);
  const _articles = d.querySelectorAll(article);

  _tabs.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
      _btns.forEach((el) => {
        el.classList.remove('live');
      });
      e.target.classList.add('live');
      _articles.forEach((el) => {
        el.classList.remove('live');
      });
      const element = d.getElementById(id);
      element.classList.add('live');
    }
  });
}
