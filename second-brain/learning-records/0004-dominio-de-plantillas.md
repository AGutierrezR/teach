# Dominio de las dos capas de plantillas (roam + org-capture)

El usuario declara haber entendido ambas capas de plantillas: `capture.templates` (texto → inbox) y `extensions.roam.capture_templates` (nodos). Su pregunta sobre la opción “default” en el código (`d` de fábrica + fusión en profundidad) muestra comprensión fina: entiende que los diccionarios se mezclan, no se reemplazan.

- **Evidencia**: ejecutó su captura, notó y cuestionó un detalle no obvio (la plantilla `d`), y confirma entender los dos sistemas. Primera vez que maneja configuración de org.nvim a este nivel.
- **Implicaciones**: la ZDP sale ya de la configuración de captura. Siguiente paso: hacer **usables** las tareas ya capturadas (agenda, fechas, refile, revisión) y/o el **registro diario** (dailies). No re-enseñar plantillas ni captura. Recordar que las tareas en `refile.org`/`Tasks` están capturadas pero inertes: falta el ciclo de vida y la vista de agenda.
