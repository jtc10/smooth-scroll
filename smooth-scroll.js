// Smooth Scroll

function smoothScroll(target, duration) {
  let targetSection = document.querySelector(target);
  //console.log('targetSection: ' + targetSection);
  let targetPosition = targetSection.getBoundingClientRect().top;
  //console.log('targetPosition: ' + targetPosition);
  let startPosition = window.pageYOffset;
  //console.log('startPosition: ' + startPosition);
  // let distance = targetPosition - startPosition;
  // console.log('distance: ' + distance);
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
	   t /= d / 2 ;
	   if (t < 1) return c / 2 * t * t + b;
	   t--;
	   return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

ul[0].addEventListener('click', function (e) {
  let target = '';
  if (e.target && e.target.className == 'about') {
    target = '.about-section';
    smoothScroll(target, 1000);
  }else if (e.target && e.target.className == 'portfolio') {
    target = '.portfolio-section';
    smoothScroll(target, 1000);
  }else if (e.target && e.target.className == 'contact') {
    target = '.contact-section';
    smoothScroll(target, 1000);
  }
});
