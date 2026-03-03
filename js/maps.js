/* =========================================
   Maps Facade Pattern implementation
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const btnGmaps = document.getElementById('load-gmaps');
    const btnWaze = document.getElementById('load-waze');
    const mapContainer = document.getElementById('map-iframe-container');

    const gmapsIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60617.60704605025!2d-85.51711382490151!3d10.629533388934833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f757d2a8a1c08e5%3A0xb2f8a494fb368393!2sProvincia%20de%20Guanacaste%2C%20Liberia!5e1!3m2!1ses-419!2scr!4v1769628204690!5m2!1ses-419!2scr" title="Google Maps" loading="lazy" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>';

    // Waze deep link and iframe
    const wazeIframe = '<iframe src="https://embed.waze.com/iframe?zoom=16&lat=10.636270&lon=-85.430546&pin=1&ct=livemap" title="Waze Map" loading="lazy" style="border:0;" allowfullscreen></iframe>';

    if (btnGmaps) {
        btnGmaps.addEventListener('click', () => {
            if (!navigator.onLine) {
                alert("Verifica tu conexión a internet para cargar el mapa.");
                return;
            }
            mapContainer.innerHTML = gmapsIframe;
            mapContainer.classList.add('active');
        });
    }

    if (btnWaze) {
        btnWaze.addEventListener('click', () => {
            // Option to open app directly or show map
            // For now, facade pattern: replace container
            if (!navigator.onLine) {
                alert("Verifica tu conexión a internet para cargar el mapa.");
                return;
            }
            mapContainer.innerHTML = wazeIframe;
            mapContainer.classList.add('active');

            // Also offer a deep link for Mobile users
            if (window.innerWidth < 768) {
                // If the user clicks on Waze in mobile, sometimes jumping to the app is preferred,
                // but we will stick to showing the iframe and providing an alert deep link or just let the iframe handle it.
            }
        });
    }
});
