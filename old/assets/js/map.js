$(document).ready(function() {
	"use strict";

	function a() {
		$(".google-map").each(function(a) {
			var e = parseFloat($(this).data("lat")),
				t = parseFloat($(this).data("lng")),
				o = parseInt($(this).data("zoom")),
				s = {
					center: {
						lat: e,
						lng: t
					},
					zoom: o,
					scrollwheel: !1,
					styles: [{
						stylers: [{
							saturation: 10
						}, {
							gamma: 0
						}, {
							lightness: 12
						}]
					}]
				},
				n = new google.maps.Map(this, s);
			new google.maps.Marker({
				position: new google.maps.LatLng(e, t),
				map: n,
				icon: "assets/img/template/map-marker.png"
			})
		})
	}
	google.maps.event.addDomListener(window, "load", a)
});