document.addEventListener('DOMContentLoaded', function(event) { 
  var veil = document.querySelector('.veil');
  var main = document.querySelector('main');
  var missionStatement = document.querySelector('.mission-statement');

  // initally set position of background (not sure if this is ideal)
  var Pos = (window.scrollY / main.dataset.speed) * -1; 
  var coords = '50% '+ Pos + 'px';
  main.setAttribute('style', 'background-position: ' + coords);

  // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  //   var h = window.innerHeight;
  //   main.style.height = h + 'px';
  //   window.addEventListener('resize', () => {
  //     var hh = window.innerHeight;
  //     main.style.height = hh + 'px';
  //   })
  //   window.addEventListener('orientationchange', () => {
  //     var hh = window.innerHeight;
  //     main.style.height = hh + 'px'
  //   })
  // }
  
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