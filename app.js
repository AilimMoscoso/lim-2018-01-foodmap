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
        div.className = 'result';
        let span = document.createElement('span');
        span.innerHTML = restaurant.name.bold();
        span.className = 'restaurant';
        let image = document.createElement('img');
        image.src = restaurant.image;
        image.className = 'foto';
        div.appendChild(span);
        div.appendChild(image);
        container.appendChild(div);
    });
    load(filters);
});

function load(filters) {
    restaurants = document.getElementsByClassName('restaurant');
    let dialog = document.getElementById('favDialog');
    for (let i = 0; i < restaurants.length; i++) {
        let restaurant = restaurants[i];
        restaurant.addEventListener('click', function() {
            dialog.removeChild(dialog.firstChild);
            let p = document.createElement('p');
            p.innerHTML = filters[i].name + '<br/>';
            p.innerHTML += filters[i].address;
            dialog.appendChild(p);
            dialog.showModal();
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -12.20, lng: -76.94},
        zoom: 12
    });
}
