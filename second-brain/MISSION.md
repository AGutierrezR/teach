# Mission: Second Brain en org-mode / org-roam

## Why
Andrés es programador y quiere dejar de perder ideas y conocimiento en papel y notas sueltas. Quiere un "segundo cerebro" que viva en texto plano, dentro de Neovim, donde capturar sea instantáneo y las notas se conecten entre sí, para poder pensar, escribir y ejecutar proyectos sobre lo que ya sabe.

## Success looks like
- Captura cualquier idea, enlace o tarea desde Neovim en menos de 15 segundos, sin decidir dónde va.
- Encuentra cualquier nota por su título (buscador de nodos) sin recordar en qué archivo está.
- Cada nota permanente nace con un `:ID:` y al menos un enlace a otra nota.
- Ejecuta de verdad una rutina semanal de procesado: inbox → nodos / refile / borrar.
- Produce al menos un ensayo, post o documento exportado desde sus propias notas.

## Constraints
- Usa Neovim 0.12 + `xheisenbugx/org.nvim` (extensión `roam` habilitada), **no** Emacs. Prefijo de atajos: `<leader>O`.
- Aprende en español. Sesiones cortas, con una victoria tangible por sesión.
- Todo debe ser texto plano y formato org estándar (portable; sobrevive a cualquier plugin).
- Ya tiene un esqueleto tipo PARA en `~/org/roam/init.org` que puede reutilizar, podar o reemplazar.

## Out of scope
- Instalar o configurar Emacs.
- Babel / literate programming (ejecutar código dentro de notas) por ahora: tentador, pero no es el cuello de botella.
- Publicación web / blogs complejos.
- Migrar los cuadernos de papel de golpe — se hará por demanda.
