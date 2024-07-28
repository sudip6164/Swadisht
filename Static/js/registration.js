document.addEventListener("DOMContentLoaded", function () {
    //Steps and previous next buttons
    var current = 0;
    var steps = document.querySelectorAll("fieldset");
    var nextBtns = document.querySelectorAll(".next");
    var prevBtns = document.querySelectorAll(".previous");
    var progressBar = document.querySelectorAll("#progressbar li");

    function showStep(index) {
        steps.forEach(function (step, i) {
            step.style.display = (i === index) ? "block" : "none";
        });
        progressBar.forEach(function (bar, i) {
            if (i <= index) {
                bar.classList.add("active");
            } else {
                bar.classList.remove("active");
            }
        });
        // Invalidate map size when it becomes visible
        if (index === 1) { // Assuming the map is in the second fieldset (index 1)
            setTimeout(function() {
                map.invalidateSize();
            }, 100);
        }
    }

    nextBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            if (validateStep(current)) {
                current++;
                showStep(current);
            }
        });
    });

    prevBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            current--;
            showStep(current);
        });
    });

    function validateStep(index) {
        var valid = true;
        var inputs = steps[index].querySelectorAll("input[required], select[required]");
        inputs.forEach(function (input) {
            if (!input.checkValidity()) {
                input.reportValidity();
                valid = false;
            }
        });
        return valid;
    }

    showStep(current);

    // Leaflet map initialization
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
