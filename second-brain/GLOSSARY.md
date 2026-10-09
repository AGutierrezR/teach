# Second Brain (org-mode / org-roam) Glossary

Vocabulario canónico de este workspace. Todas las lecciones se adhieren a estos términos. Fuente: [manual org-roam](https://www.orgroam.com/manual.html) y [manual org.nvim / roam](https://org-nvim.com/manual/org-extensions-roam.html).

## Modelo de notas

**Nodo**:
Un archivo `.org` (nivel archivo) o un headline que tiene una propiedad `:ID:` propia. Es la unidad atómica de la red. Sin `:ID:` no es un nodo.
_Avoid_: Nota (ambiguo: "nota" también es el contenido; decir "nodo" cuando hablamos de la unidad de la red).

**ID**:
La propiedad `:ID:` (en Neovim, un UUID) que identifica unívocamente a un nodo. Es el pegamento de la red: los enlaces apuntan a IDs, no a rutas de archivo.
_Avoid_: UUID, identificador (usar "ID" siempre).

**Enlace ID** (`id:` link):
Enlace de org de forma `[[id:UUID][Descripción]]` que apunta a un nodo. Es el único tipo de enlace que cuenta para el grafo de org-roam.
_Avoid_: Link interno, hyperlink.

**Backlink**:
Un enlace que *entra* a un nodo: otra nota que apunta hacia él. Se ven en la ventana de backlinks.
_Avoid_: Enlace entrante, referencia inversa.

**ROAM_REFS**:
Propiedad de un nodo que declara su(s) **fuente(s) externa(s)**: una URL (`https://...`) o clave de cita (`@key`, `[cite:@key]`, `cite:key`). Da identidad externa al nodo (de qué trata) y es lo que permite conectar citas repartidas por la red. No se indexa como enlace; no meter IDs de nodos aquí. En org.nvim: `Space O m R` (`roam_ref_add`).
_Avoid_: Referencias, metadatos de fuente.

**Reflink**:
La conexión que aparece en la ventana de backlinks cuando *otro* nodo cita uno de los `ROAM_REFS` de este nodo (una URL o una clave de cita), aunque no exista un `id:` link entre ambos. Distinto de un backlink (que sí es un `id:` link).
_Avoid_: Referencia, cita.

**Referencia no enlazada** (unlinked reference):
Mención en texto del título o alias de un nodo, sin enlace. Candidata a convertirse en enlace.
_Avoid_: Mención, referencia suelta.

## Tipos de nota (Zettelkasten)

**Nota efímera** (fleeting note):
Recordatorio rápido sin procesar. Vive en el inbox o en la nota diaria. Está destinada a procesarse o borrarse.
_Avoid_: Nota rápida, apunte.

**Nota permanente**:
Nota autosuficiente y atómica, escrita con tus palabras, que mantendrá su sentido dentro de años. Nace de procesar una nota efímera.
_Avoid_: Nota final, nota buena.

**Nota de literatura**:
Anotación breve sobre una fuente concreta (libro, paper, web) para volver a ella después.
_Avoid_: Resumen, ficha.

**Nota de concepto**:
Nota permanente sobre una *idea* propia, no sobre una fuente. Debe explicarse sola y enlazarse con otras.
_Avoid_: Nota de idea.

**MOC** (Map of Content):
Nota que agrupa y enlaza un conjunto de notas relacionadas para dar estructura al grafo. Reemplaza a la carpeta como forma de "agrupar".
_Avoid_: Índice, hub, nota madre.

**Nodo huérfano** (orphan):
Nodo sin ningún enlace entrante ni saliente. Solo se alcanza por búsqueda, no navegando. Es una *norma de calidad*, no un error técnico: org-roam lo permite. Una nota efímera puede ser huérfana; una permanente ya procesada, no debería serlo.
_Avoid_: Nota suelta, nota perdida.

**Alcanzabilidad** (reachability):
Propiedad de un nodo que se puede llegar a él navegando desde algún punto de entrada: otro nodo, un MOC o una daily. Reformula la norma "todo nodo debe estar enlazado": lo que importa es ser alcanzable, no tener un enlace forzado. Un enlace sin sentido es peor que un huérfano temporal.
_Avoid_: Conectividad.

## Flujo de trabajo

**Capture** (capturar):
Meter algo (idea, tarea, enlace) al sistema rápido, sin decidir dónde va. En org.nvim: `<leader>Oc`.
_Avoid_: Guardar, anotar.

**Inbox**:
El destino por defecto de las capturas: una cola de cosas sin procesar. Puede ser una cabecera o un archivo (`refile.org`).
_Avoid_: Bandeja, pendientes.

**Refile**:
Mover un subtree ya escrito desde donde está (p. ej. el inbox) a su sitio definitivo. `<leader>Or`.
_Avoid_: Mover, archivar (archivar es cosa distinta).

**Dailies** (notas diarias):
Un archivo de nodo por día, donde capturar el día a día. `<leader>Omd…`.
_Avoid_: Diario, journal (aunque "journal" se usa, aquí decimos "dailies").

**Agenda**:
Vista agregada de tareas con fechas (SCHEDULED/DEADLINE) de todos tus archivos org. `<leader>Oa`.
_Avoid_: Calendario, planner.

## Organización accionable (PARA)

**PARA**:
Método de Tiago Forte: **P**rojects, **A**reas, **R**esources, **A**rchive. Organiza lo *accionable*, no el conocimiento. Convive con org-roam, que organiza el conocimiento por enlaces.
_Avoid_: Sistema de carpetas.

> **Aviso de tensión (importante):** PARA organiza por *ubicación* (jerarquía). Org-roam organiza por *enlaces* (red). No son enemigos, pero mezclarlos sin entender la diferencia es la causa #1 de que un segundo cerebro se pudra.
