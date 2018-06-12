document.addEventListener('DOMContentLoaded', function(event) { 
  var veil = document.querySelector('.veil');
  var main = document.querySelector('main');
  var missionStatement = document.querySelector('.mission-statement');
  var t1 = document.querySelector('.testimonial-1');
  var t2 = document.querySelector('.testimonial-2');
  var t3 = document.querySelector('.testimonial-3');

  var once = false;
  var once2 = false;
  var once3 = false;

  // initally set position of background (not sure if this is ideal)
  var Pos = (window.scrollY / main.dataset.speed) * -1; 
  var coords = '50% '+ Pos + 'px';
  main.setAttribute('style', 'background-position: ' + coords);
  
  window.addEventListener('scroll', function(event) {
    // make main section fade to black
    var blackValue = (Math.abs(veil.getBoundingClientRect().top)) / 420;
    veil.setAttribute('style', 'opacity: ' + blackValue + ';');

    // parallax for main section
    var yPos = -(window.scrollY / main.dataset.speed); 
    var coords = '50% '+ yPos + 'px';
    main.setAttribute('style', 'background-position: ' + coords);

    if (t1.getBoundingClientRect().bottom < 880 && !once) {
      once = true;
      t1.classList.add('fade-left');
    } 

    if (t2.getBoundingClientRect().bottom < 880 && !once2) {
      once2 = true;
      t2.classList.add('fade-right');
    } 

    if (t3.getBoundingClientRect().bottom < 880 && !once3) {
      once3 = true;
      t3.classList.add('fade-left');
    } 
  });

});