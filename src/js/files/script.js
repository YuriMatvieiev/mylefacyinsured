// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const mapContainer = document.getElementById("map");

if (mapContainer) {
  const map = L.map("map").setView([28.628217, -81.402102], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  const marker = L.marker([28.628217, -81.402102]).addTo(map);
  marker.openPopup();
}
