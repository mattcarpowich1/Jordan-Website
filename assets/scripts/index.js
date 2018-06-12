document.addEventListener('DOMContentLoaded', function(event) { 
  var veil = document.querySelector('.veil');

  window.addEventListener('scroll', function(event) {
    var blackValue = (Math.abs(veil.getBoundingClientRect().top)) / 420;
    veil.setAttribute('style', 'opacity: ' + blackValue + ';');
  });

});