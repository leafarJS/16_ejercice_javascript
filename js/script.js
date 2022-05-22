'use strict';
const d = document;
const w = window;

import backgroundPopup from './Background.js';
import buttonAwesome from './Button.js';
import characterCounter from './CharacterCounter.js';
import clockDigital from './ClockDigital.js';
import darkMode from './DarkMode.js';
import drumKits from './DrumKits.js';
import heart from './Heart.js';
import multiply from './Multiply.js';
import navBar from './Navbar.js';
import randomColor from './RandomColor.js';
import randomPhoto from './RandomPhoto.js';
import scrollImage from './ScrollImg.js';
import sliderImg from './SliderImg.js';
import tabs from './Tabs.js';
import textEffect from './TextEffect.js';
import videoPopup from './Video.js';

d.addEventListener('DOMContentLoaded', (e) => {
  tabs('.tabs', '.button-tabs', '.tabs-content-text');
  textEffect('.text-effect-container');
  darkMode('.input-dark-mode', '.dark-mode-section');
  sliderImg('.image-container-slider');
  randomPhoto('.image-container', '.btn-image', '.prev-slider');
  drumKits('.drum-container');
  scrollImage('.scroll-image-bg');
  backgroundPopup(
    '.btn-background',
    '.background-container',
    '.popup-container',
    '.fa-times'
  );
  videoPopup('.btn-video', '.video-trailer-container');
  heart('.heart-section');
  navBar('.navbar-container', '.bottom-container', '.close-icon');
  randomColor('.random-color-container');
  characterCounter('character-counter-textarea');
  buttonAwesome('.btn-button');
  multiply(
    'question-multiply',
    '.form-multiply',
    'input-multiply',
    'score-multiply'
  );
  clockDigital('.hour', '.minute', '.second', 'ampm');
});
