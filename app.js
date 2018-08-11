console.log(filterByType(restaurants, 'marina'));

var map;
        
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}

function filterByType (data, type) {
    restaurants = [];
    data.forEach(restaurant => {
        if (restaurant.type === type)
            restaurants.push(restaurant);
    });
    return restaurants;
}