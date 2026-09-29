# Tipos de archivo, contexto y filtros de salida

El usuario domina ahora el scoping de búsqueda (`--include` / `-g` / `-t` con globs y tipos predefinidos), el contexto
(`-A`/`-B`/`-C`), los filtros de salida (`-v`, `-c`, `-o`) y grep como filtro de otros comandos (`cmd | grep`,
`2>&1`, `ps aux | grep -v grep`). Completó los cuestionarios de las lecciones 4 y 5.
Status: active

**Implications:** con esto quedan cubiertos los 4 criterios de éxito de la misión (búsqueda global, filtro de salida,
exclusión/tipos, y cuándo usar `rg`). La lección 6 la cerrará con un flujo real de diagnóstico y la checklist final.
Frente siguiente tras el cierre: incorporar `rg` como hábito y el paso a `fzf` para abrir archivos, además de
comunidades (r/commandline) para la parte de sabiduría.