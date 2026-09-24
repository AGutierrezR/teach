# Mission: Grep para buscar en proyectos de código

## Why
Quiero dejar de revisar archivos a mano y poder localizar funciones, variables y errores en mis proyectos frontend (Svelte, JS/TS, HTML/CSS) en cuestión de segundos, directamente desde la terminal.

## Success looks like
- Puedo `grep -rn` sobre un proyecto entero y aterrizar en la línea donde se define una función
- Puedo filtrar la salida de otros comandos (builds, logs, git) con un pipe
- Puedo excluir carpetas ruidosas (`node_modules`) y limitar la búsqueda a ciertos tipos de archivo
- Reconozco cuándo vale la pena usar `rg` (ripgrep) en lugar de `grep`

## Constraints
- Mac con ripgrep instalado (`rg 15.2.0`) y grep BSD nativo
- Nivel actual: usa `cd`, `ls`, `cat`; nunca a fondo grep
- Sesiones cortas, una lección por sesión

## Out of scope
- `awk` y `sed` (para más adelante)
- Expresiones regulares avanzadas (lookahead, backreferences) hasta dominar lo básico
- Edición de archivos dentro de la búsqueda (grep solo lee)