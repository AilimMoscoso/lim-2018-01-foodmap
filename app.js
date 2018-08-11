var map;
var markers = [];
var marker;

options = document.getElementById('options');
options.addEventListener('change', function() {
    filters = [];
    markers.forEach(marker => {
        marker.setMap(null)
    });
    markers = [];
    restaurants.forEach(restaurant => {
        if (restaurant.type === options.value) {
            filters.push(restaurant);
            lat = restaurant.location.latitude;
            lng = restaurant.location.longitude;
            title = restaurant.name;
            marker = new google.maps.Marker({
                position: {lat: lat, lng: lng},
                title: title,
                map: map
            });
            markers.push(marker);
        }
    });
    console.log(filters);
    return filters;
})

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.20, lng: -76.94},
        zoom: 12
    });
}
