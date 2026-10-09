# Notas de trabajo (preferencias y observaciones)

## Preferencias del usuario
- Idioma de las lecciones: **español**. Los términos técnicos se dejan en inglés (org-mode, node, backlink) y se definen en [[GLOSSARY.md]].
- Editor: **Neovim 0.12** con `xheisenbugx/org.nvim`, extensión `roam` activada. Prefijo de atajos personalizado: **`<leader>O`** (no el default `<leader>o`).
- Config del plugin: `~/.config/nvim/lua/plugins/org.lua`. Directorio org: `~/org`. `default_notes_file = ~/org/refile.org`.
- Objetivo declarado: aprender *toda* la funcionalidad y cómo organizarse. Es amplio → mantener lecciones atadas a la misión y no convertirlo en un tour de features.

## Observaciones de setup (comprobado 2026-10-09)
- Ya existe `~/org/roam/init.org` con un esqueleto **PARA** (Inbox, MOCs, Proyectos, Áreas, Recursos, Archivo, Tareas) — buen instinto, pero mezcla jerarquía con la red.
- Existe un nodo de prueba `~/org/roam/20261007000700-test.org` (`:ID:` + `#+title: test`).
- `~/org/todo.org` está vacío. `~/org/refile.org` tiene varias tareas capturadas con enlaces `file:` al config de nvim.
- Conclusión: sabe instalar y capturar; no parece haber usado aún enlaces `id:`, backlinks ni el flujo de nodos.

## Convenciones del workspace
- Lecciones numeradas `0001-...`, un solo tema acotado cada una.
- Cada lección enlaza a `../reference/*.html` y a la fuente primaria.
- Quiz: opciones siempre con el mismo número de palabras/caracteres para no dar pistas.
