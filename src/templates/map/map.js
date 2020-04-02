const map = L.map('map').setView([51.505, -0.09], 13);
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 0 ],
});

L.Marker.prototype.options.icon = DefaultIcon;

L.marker([51.5, -0.00]).addTo(map)
.bindPopup('Hello')
.openPopup();