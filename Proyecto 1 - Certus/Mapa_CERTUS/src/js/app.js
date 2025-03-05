document.addEventListener("DOMContentLoaded", function() {
  const map = L.map('map').setView([32.52, -117.00], 10);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Definir colores y formas para cada empresa
  const estilosEmpresas = {
    "certus": { color: "blue", shape: "circle" },
    "calimax": { color: "red", shape: "square" },
    "farmacias_roma": { color: "green", shape: "penta" },
    "oxxo": { color: "orange", shape: "star" },
    "soriana": { color: "purple", shape: "circle" },
    "coppel": { color: "black", shape: "square" },
    "walmart": { color: "gray", shape: "penta" },
    "heb": { color: "white", shape: "star" },
    "costco": { color: "red", shape: "circle" },
    "bodega_aurrera": { color: "yellow", shape: "square" },
    "default": { color: "black", shape: "circle" }
  };

  const usarDatosPrueba = false;

  if (usarDatosPrueba) {
    const datosPrueba = [
      { "nombre": "CERTUS LABORATORIO SUC ALTABRISAS", "latitud": 22.15093238, "longitud": -100.9618294, "empresa": "certus" },
      { "nombre": "Calimax Plaza Río", "latitud": 32.53200, "longitud": -117.02000, "empresa": "calimax" },
      { "nombre": "Farmacias Roma Centro", "latitud": 32.52400, "longitud": -117.02500, "empresa": "farmacias_roma" },
      { "nombre": "OXXO Revolución", "latitud": 32.52750, "longitud": -117.03200, "empresa": "oxxo" }
    ];

    console.log("Cargando datos de prueba...");
    procesarSucursales(datosPrueba);

  } else {
    fetch('js/sucursales.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error al cargar el JSON: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("JSON cargado correctamente:", data);
        procesarSucursales(data);
      })
      .catch(error => console.error("Error al cargar los datos JSON:", error));
  }

  function procesarSucursales(data) {
    data.forEach(sucursal => {
      if (!sucursal.latitud || !sucursal.longitud) {
        console.warn(`Sucursal sin coordenadas: ${JSON.stringify(sucursal)}`);
        return;
      }

      const empresa = sucursal.empresa || "default";
      const estilo = estilosEmpresas[empresa] || estilosEmpresas["default"];

      // Crear el marcador personalizado sin mostrar el icono en el código
      const customIcon = L.ExtraMarkers.icon({
        icon: "",
        markerColor: estilo.color,
        shape: estilo.shape,
        prefix: ""
      });

      const marker = L.marker([sucursal.latitud, sucursal.longitud], { icon: customIcon }).addTo(map);

      const nombreSucursal = sucursal.nombre || "Sucursal sin nombre";
      marker.bindPopup(`<b>${nombreSucursal}</b>`);
    });
  }
});
