'use strict';
const d = document;
const w = window;

const updateImage = (img) => {
  if (w.pageYOffset < 1900) {
    console.log(img);
    console.log(w.pageYOffset);
    img.backgroundImage =
      'url(https://images.unsplash.com/photo-1653051898488-080c49db3588?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8&auto=format&fit=crop&w=800)';
  }
};

export default function scrollImage(imgBg) {
  const _imgBg = d.querySelector(imgBg);

  w.addEventListener('scroll', (e) => {
    //updateImage(_imgBg);
    if (w.pageYOffset === 1500) {
      _imgBg.classList.toggle('active');
    }
  });
}
