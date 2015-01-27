function initialize(){
	var mapCanvas = document.getElementById("map-canvas");
	var mapOptions = {
      center: new google.maps.LatLng(40.504326, -74.369446),
      zoom: 19,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);