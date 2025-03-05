# Requerimientos del Proyecto - Mapa Interactivo CERTUS

## Introducción

El objetivo del proyecto es desarrollar un mapa interactivo de uso interno que permita visualizar las sucursales de CERTUS y, en paralelo, la ubicación de la competencia. Este mapa servirá como una herramienta clave en el plan maestro de expansión de sucursales, proporcionando información relevante para la toma de decisiones estratégicas.

## Objetivos del Proyecto

- **Visualización Integral:** Mostrar en un solo mapa las ubicaciones de las sucursales de CERTUS y de la competencia.
- **Interacción y Accesibilidad:** Permitir que al hacer clic en cada ubicación se despliegue información detallada.
- **Soporte para la Expansión:** Ofrecer datos que ayuden a identificar zonas con potencial para abrir nuevas sucursales.

## Requerimientos Funcionales

1. **Visualización de Ubicaciones**
   - El mapa debe mostrar las ubicaciones de las sucursales de CERTUS.
   - Deberá existir la opción de visualizar también las ubicaciones de la competencia (locales similares, por ejemplo, Calimax, farmacias, etc.).

2. **Información en Popups**
   - Al hacer clic en un marcador (ubicación), se debe desplegar un popup con:
     - **Servicios que ofrece:** Lista de servicios disponibles en la sucursal.
     - **Horarios de apertura:** Información de apertura y cierre.
     - **Calificaciones y Comentarios:** Datos extraídos (o simulados inicialmente) de Google Maps, incluyendo la calificación promedio y el número de opiniones.
     - **Locales Cercanos:** Información de otros negocios o servicios en la zona que puedan influir en la decisión (por ejemplo, Calimax, farmacias, etc.).

3. **Interacción con el Mapa**
   - Los usuarios deben poder:
     - Navegar a través del mapa (zoom, desplazamiento).
     - Seleccionar marcadores para ver detalles.
   - La interfaz debe ser intuitiva para facilitar el uso por parte del personal interno.

## Requerimientos No Funcionales

- **Usabilidad:**  
  La interfaz debe ser sencilla, permitiendo que el usuario encuentre la información de manera rápida y sin complicaciones.

- **Rendimiento:**  
  El mapa y sus funcionalidades deben cargarse rápidamente, incluso al manejar múltiples puntos de información.

- **Escalabilidad y Mantenibilidad:**  
  La solución debe permitir la incorporación de nuevos puntos o capas de información en el futuro sin requerir cambios significativos en la arquitectura.

- **Documentación y Control de Cambios:**  
  Aunque inicialmente se trabajará en Google Drive, se mantendrá una documentación clara (como este archivo) para facilitar la migración a herramientas de control de versiones en el futuro.

## Notas Adicionales

- **Datos de Prueba:**  
  Inicialmente se utilizarán datos simulados o manuales para las sucursales y locales cercanos. Se evaluará la integración de APIs (por ejemplo, Google Maps o Google Places) en futuras iteraciones para obtener datos reales.
  
- **Uso Interno:**  
  Este mapa será una herramienta interna, lo que implica que la seguridad y el acceso se ajustarán a las necesidades del personal de CERTUS.

- **Futuras Mejoras:**  
  Se considerará la implementación de filtros, análisis de tendencias y visualizaciones avanzadas (como heatmaps) a medida que se defina el alcance del plan maestro de expansión.

---