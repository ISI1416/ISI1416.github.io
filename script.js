// Geolocalización y mapa
function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mostrarMapa);
    } else {
        document.getElementById("location").innerText = "La geolocalización no es compatible con este navegador.";
    }
}

function mostrarMapa(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    // Mostrar las coordenadas en texto
    document.getElementById("location").innerText = `Latitud: ${lat}, Longitud: ${lon}`;
    
    // Configurar el mapa con Leaflet.js
    const map = L.map('map').setView([lat, lon], 13);

    // Cargar las capas de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Añadir un marcador en la ubicación actual
    L.marker([lat, lon]).addTo(map)
        .bindPopup('¡Estás aquí!')
        .openPopup();
}

// Llamada a la función de geolocalización al cargar
window.onload = obtenerUbicacion;

// Cálculo de precio en bolivianos
function calcularPrecio() {
    const cantidad = document.getElementById("cantidad").value;
    const precioPorGramo = 0.7; // Precio ficticio en bolivianos por gramo
    const precio = cantidad * precioPorGramo;
    document.getElementById("resultado").innerText = `Precio: ${precio.toFixed(2)} Bs`;
}
