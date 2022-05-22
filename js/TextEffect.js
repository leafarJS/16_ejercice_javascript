'use strict';
const d = document;
export default function textEffect(container) {
  const _container = d.querySelector(container);
  const careers = [
    'strategic planner',
    'Web developer',
    'Internal Auditor',
    'process specialist',
  ];
  let careerIndex = 0;
  let characterIndex = 0;

  function careerText() {
    characterIndex++;
    _container.innerHTML = `<h1>I am a ${careers[careerIndex].slice(
      0,
      characterIndex
    )}</h1>`;

    if (characterIndex === careers[careerIndex].length) {
      careerIndex++;
      characterIndex = 0;
    }
    if (careerIndex === careers.length) {
      careerIndex = 0;
    }
    setTimeout(careerText, 400);
  }

  careerText();
}
