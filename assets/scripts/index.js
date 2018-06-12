document.addEventListener('DOMContentLoaded', function(event) { 
  var veil = document.querySelector('.veil');
  var main = document.querySelector('main');

  window.addEventListener('scroll', function(event) {
    // make main section fade to black
    var blackValue = (Math.abs(veil.getBoundingClientRect().top)) / 420;
    veil.setAttribute('style', 'opacity: ' + blackValue + ';');

    // parallax for main section
    var yPos = -(window.scrollY / main.dataset.speed); 
    var coords = '50% '+ yPos + 'px';
    main.setAttribute('style', 'background-position: ' + coords);
  });
});