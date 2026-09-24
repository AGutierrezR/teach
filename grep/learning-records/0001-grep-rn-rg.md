# grep -rn sobre proyectos y rg como reemplazo

Quedó establecido que el usuario cruza proyectos enteros con `grep -rn`, conoce la salida `archivo:línea:contenido`,
`--exclude-dir` para `node_modules`, y que `rg` respeta `.gitignore` (nació recursivo y por eso su `-r` es `--replace` — pregunta que él mismo formuló).
Status: active

**Evidence:** completó el cuestionario de la lección 3 sin fallos y preguntó por qué `rg` no usa `-r`, demostrando que entiende la diferencia de diseño frente a grep.

**Implications:** puede trabajar en proyectos reales (`svelte-apps-main`). Su zona próxima es afinar el tipo de archivo
(`--include` / `-g` / `-t`) y ver contexto alrededor del match (`-A`/`-B`/`-C`) — el plato natural para la lección 4.