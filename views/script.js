$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });  
  
  
  });
  
  var map = L.map('map', {
    // crs: crs,
    continuousWorld: true,
    worldCopyJump: false,
    center: [63.42, 10.39], // EDIT coordinates to re-center map
    zoom: 12,  // EDIT from 1 (zoomed out) to 18 (zoomed in)
    scrollWheelZoom: true,
    tap: false
  });
  
  
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">\
      OpenStreetMap</a> contributors, &copy;\
      <a href="https://carto.com/attribution">CARTO</a>'
  }).addTo(map);
  
  