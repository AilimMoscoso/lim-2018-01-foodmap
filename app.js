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
    let container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    filters.forEach(restaurant => {
        let div = document.createElement('div');
        let span = document.createElement('span');
        let p = document.createElement('p');
        span.innerHTML = restaurant.name;
        p.innerHTML = restaurant.type;
        div.appendChild(span);
        div.appendChild(p);
        container.appendChild(div);
    });
})

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.20, lng: -76.94},
        zoom: 12
    });
}
