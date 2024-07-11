document.addEventListener("DOMContentLoaded", function() {
    const kathmanduCoords = [27.7172, 85.3240]; // Coordinates for Kathmandu, Nepal
    const map = L.map('map').setView(kathmanduCoords, 13);
    const marker = L.marker(kathmanduCoords, { draggable: true }).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    marker.on('dragend', function() {
        const latlng = marker.getLatLng();
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('address').value = data.display_name;
            })
            .catch(error => console.error('Error:', error));
    });

    document.getElementById('address').addEventListener('change', function() {
        const address = this.value;
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.length > 0) {
                    const latlng = [data[0].lat, data[0].lon];
                    map.setView(latlng, 15);
                    marker.setLatLng(latlng);
                }
            })
            .catch(error => console.error('Error:', error));
    });
});