//=require jquery/dist/jquery

L.mapbox.accessToken = 'pk.eyJ1IjoidGV4YXN0cmlidW5lIiwiYSI6Ilo2eDhZWmcifQ.19qcXfOTN6ulkGW5oouiPQ';

var Mapper = function (mapZoom) {
  'use strict';

  this.baseLayer = L.mapbox.tileLayer('texastribune.map-f9zh0xcn', {
    detectRetina: true,
    zoomControl: true,
    retinaVersion: 'texastribune.map-v9ed8kfi'
  });

  this.map = L.mapbox.map('map');
  this.map.touchZoom.disable();
  this.map.doubleClickZoom.disable();
  this.map.scrollWheelZoom.disable();
  this.map.addLayer(this.baseLayer).setView([31.35, -99.64], mapZoom);

  this.update = function(data) {
    this.countiesLayer = L.geoJson(data);
    this.countiesLayer.addTo(this.map);
  };
};

$(document).ready(function() {
  'use strict';

  var mapZoom = 6,
      $selector = $('#selector'),
      mapper;

  if ($(window).width() <= 480) {
    mapZoom = 5;
  }
  mapper = new Mapper(mapZoom);

  $.getJSON('counties.json', function(data) {
    mapper.update(data);
  });
});
