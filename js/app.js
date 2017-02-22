'use strict'

function initMap() {

	var map = new google.maps.Map(document.getElementById('google-map'), {
		center: {lat: 34.737427, lng: -111.761907},
		scrollwheel: false,
		zoom: 9,
		disableDefaultUI: true
	});

	var marker = new google.maps.Marker({
		position: {lat: 34.867427, lng: -111.761907},
		map: map,
		title: 'Sedona Reserve'
	});
}
