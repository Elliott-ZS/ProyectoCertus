# Plan de Proyecto - Mapa Interactivo CERTUS

## 1. Introducción

Este documento describe el plan de proyecto para el desarrollo del "Mapa Interactivo CERTUS". El objetivo es crear una aplicación web de uso interno que permita visualizar las sucursales de CERTUS, así como la ubicación de la competencia, con información detallada en popups (servicios, horarios, calificaciones, comentarios y locales cercanos). Esto servirá como herramienta clave en el plan maestro de expansión de la empresa.

## 2. Alcance y Objetivos

- **Objetivo Principal:**  
  Desarrollar una aplicación web interactiva que muestre las ubicaciones de las sucursales y la competencia, permitiendo al usuario obtener información relevante de cada punto en el mapa.

- **Alcance del Proyecto:**  
  - Implementación de un mapa interactivo utilizando Leaflet.
  - Agregar marcadores con popups que contengan información básica (servicios, horarios, calificaciones, comentarios y locales cercanos).
  - Documentar y validar la solución en un entorno de pruebas (Google Drive) antes de migrar a un entorno de producción con Git y otras herramientas de control de versiones.

## 3. Fases del Proyecto y Cronograma

### Fase 1: Planificación y Diseño (Duración: 1 semana)
- Recolección y definición de requerimientos.
- Creación de la documentación inicial:  
  - **requisitos.md**
  - **diseño_tecnico.md**
  - **plan_proyecto.md**
- Organización de la estructura del proyecto.

**Fecha de Inicio:** [Definir fecha]  
**Fecha de Finalización:** [Definir fecha]

### Fase 2: Desarrollo del Mapa Interactivo Básico (Duración: 1-2 semanas)
- Configuración del entorno de desarrollo (servidor local, editor, etc.).
- Desarrollo del archivo `index.html` con la estructura básica.
- Implementación de la inicialización del mapa con Leaflet en `app.js`.
- Agregar un marcador de ejemplo y validar la visualización.

**Fecha de Inicio:** [Definir fecha]  
**Fecha de Finalización:** [Definir fecha]

### Fase 3: Integración de Datos y Funcionalidades Adicionales (Duración: 2 semanas)
- Definición de un array de datos con las sucursales de CERTUS y locales de la competencia.
- Implementación de la generación dinámica de marcadores y popups con la información detallada.
- Pruebas de interacción y validación de la información mostrada.

**Fecha de Inicio:** [Definir fecha]  
**Fecha de Finalización:** [Definir fecha]

### Fase 4: Pruebas y Documentación Final (Duración: 1 semana)
- Realización de pruebas de usabilidad y rendimiento en el entorno local.
- Recopilación de feedback y ajustes en la funcionalidad.
- Actualización de la documentación del proyecto.

**Fecha de Inicio:** [Definir fecha]  
**Fecha de Finalización:** [Definir fecha]

### Fase 5: Revisión y Futuras Mejoras (Mejora Continua)
- Evaluación de la integración con APIs externas (Google Maps/Places).
- Implementación de filtros, capas adicionales y análisis de datos.
- Planificación para migrar el proyecto a un entorno de control de versiones (Git) y eventualmente a un servidor de producción.

## 4. Asignación de Tareas y Responsables

| Tarea                                          | Responsable          | Fecha Inicio | Fecha Fin  |
|------------------------------------------------|----------------------|--------------|------------|
| Recolección y definición de requerimientos     | Equipo CERTUS        | [Fecha]      | [Fecha]    |
| Diseño de la arquitectura y documentación      | [Nombre/Equipo]      | [Fecha]      | [Fecha]    |
| Desarrollo del mapa interactivo básico         | [Nombre/Equipo]      | [Fecha]      | [Fecha]    |
| Implementación de marcadores y popups           | [Nombre/Equipo]      | [Fecha]      | [Fecha]    |
| Pruebas y ajustes                              | [Nombre/Equipo]      | [Fecha]      | [Fecha]    |
| Documentación final y revisión                 | [Nombre/Equipo]      | [Fecha]      | [Fecha]    |

## 5. Recursos y Herramientas

- **Entorno de Desarrollo:**  
  - Editor de código (Visual Studio Code, Sublime Text, etc.).
  - Navegador web para pruebas.
  - Servidor local (por ejemplo, Python o Live Server en VS Code).

- **Documentación y Comunicación:**  
  - Google Drive para compartir y actualizar la documentación.
  - Herramientas de comunicación (correo, chat, videoconferencias).

## 6. Riesgos y Estrategias de Mitigación

- **Retrasos en el desarrollo:**  
  _Estrategia:_ Reuniones semanales para revisar el avance y ajustar el cronograma.

- **Problemas técnicos con la integración de datos (APIs externas):**  
  _Estrategia:_ Mantener una versión funcional con datos simulados y planificar pruebas de integración de forma escalonada.

- **Cambios en los requerimientos:**  
  _Estrategia:_ Documentar todas las solicitudes de cambio y revisar el alcance del proyecto en reuniones periódicas.

## 7. Notas Adicionales

- Este plan es un documento vivo y se actualizará conforme se avance en el proyecto.
- Se recomienda una revisión semanal del progreso para garantizar el cumplimiento de las fechas y la calidad del desarrollo.
- Una vez que se tenga una versión estable en el entorno local, se planificará la migración a un sistema de control de versiones (Git) y el despliegue en un entorno de pruebas más robusto.

---