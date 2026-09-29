# Bind mount sincroniza archivos, no procesos

La lección 2 decía que editar `server.js` se veía solo al recargar el navegador; era falso y el usuario lo detectó. Un bind mount sincroniza el disco, pero Node (y todo proceso) carga su código en memoria al arrancar: cambios de código requieren `podman restart` (o un watcher tipo nodemon). Los archivos leídos en cada petición sí se ven al recargar.

**Implicaciones:** cualquier lección futura sobre "hot reload" o ediciones en vivo debe distinguir código (reinicio) vs contenido (recarga). Ver [[lessons/0002-monta-tu-codigo.html]].
