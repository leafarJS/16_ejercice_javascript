'use strict';
const d = document;
const updateCounter = (_textArea) => {
  const _totalCounter = d.getElementById('character-counter-total');
  const _totalRemaining = d.getElementById('character-remaining-total');

  _totalCounter.innerText = _textArea.value.length;
  _totalRemaining.innerText =
    _textArea.getAttribute('maxLength') - _textArea.value.length;
};

export default function characterCounter(textArea) {
  const _textArea = d.getElementById(textArea);

  _textArea.addEventListener('keyup', (e) => {
    updateCounter(_textArea);
  });
}
