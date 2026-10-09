# Second Brain (org-mode / org-roam) Glossary

Vocabulario canónico de este workspace. Todas las lecciones se adhieren a estos términos. Fuente: [manual org-roam](https://www.orgroam.com/manual.html) y [manual org.nvim / roam](https://org-nvim.com/manual/org-extensions-roam.html).

## Modelo de notas

**Nodo**:
Un archivo `.org` (nivel archivo) o un headline que tiene una propiedad `:ID:` propia. Es la unidad atómica de la red. Sin `:ID:` no es un nodo.
_Avoid_: Nota (ambiguo: "nota" también es el contenido; decir "nodo" cuando hablamos de la unidad de la red).

> **`:ID:` vs directorio roam:** `:ID:` es identidad (propiedad nativa de org, clara en cualquier archivo). **Nodo roam** es lo que indexa el grafo: los `.org` bajo el directorio de roam (por defecto `~/org/roam`, `extensions.roam.directory`). Cualquier cabecera/archivo puede tener `:ID:` fuera de ese directorio (tareas en `refile.org`, un proyecto en `proyectos.org`, un archivo `..._archive`) y sus enlaces `id:` siguen resolviendo — el índice de IDs de org.nvim escanea los archivos de agenda, sus archivos de archivo y `id.extra_files`. Pero las herramientas roam (buscar nodo, backlinks, grafo, `roam_capture`) solo ven lo que vive en el directorio roam. Regla: **`:ID:` = "tengo identidad"; roam = "vivo en `~/org/roam` y me indexa el grafo"**.

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

**Archivar**:
Sacar un subtree terminado de su archivo de trabajo y guardarlo en un archivo aparte (`*_archive`), sin borrarlo. Conserva el historial (`CLOSED:`, propiedades `ARCHIVE_*`) y sigue siendo buscable/enlazable. `<leader>O$`, o `$` en la agenda. Distinto de refile (que mueve, no retira de la vista).
_Avoid_: Borrar, eliminar, papelera.

**Dailies** (notas diarias):
Un archivo de nodo por día, donde capturar el día a día. `<leader>Omd…`.
_Avoid_: Diario, journal (aunque "journal" se usa, aquí decimos "dailies").

**Agenda**:
Vista agregada de tareas con fechas (SCHEDULED/DEADLINE) de todos tus archivos org. `<leader>Oa`.
_Avoid_: Calendario, planner.

## Tareas y fechas

**Estado / palabra clave** (keyword):
Palabra al inicio de una cabecera que le da un estado (`TODO`, `NEXT`, `DONE`…). En `"TODO | DONE"`, lo anterior a `|` son estados *activos* y lo posterior, *hechos*. Una tarea es, simplemente, una cabecera con estado.
_Avoid_: Etiqueta de tarea, flag.

**SCHEDULED**:
Fecha en la que *planeas trabajar* una tarea. La sitúa en la agenda pero no la "apremia".
_Avoid_: Fecha de inicio, fecha de tarea.

**DEADLINE**:
Fecha en la que una tarea *vence*. La agenda avisa desde `deadline_warning_days` días antes (por defecto 14).
_Avoid_: Límite, fecha de entrega.

**Registro** (logging):
Rastro que deja un cambio de estado o de fecha: una marca de tiempo (`!` / `CLOSED:`) o una nota (`@`). Se controla con `log_done`, `log_reschedule`, etc.
_Avoid_: Historial, log.

## Organización accionable (PARA)

**Proyecto**:
Una cabecera contenedora que agrupa acciones hacia un resultado definido. No lleva palabra clave propia (la llevan sus hijos); sí puede llevar `DEADLINE`/`SCHEDULED`. Al cerrarse, se marca DONE y se archiva. Puede ser cabecera en un archivo o un nodo con `:ID:` (si genera conocimiento).
_Avoid_: Tarea grande, objetivo.

**Área**:
Responsabilidad continua sin meta de acabado (salud, finanzas, un producto en evolución). Nunca se marca DONE ni se archiva; su <em>contenido</em> sí se archiva.
_Avoid_: Proyecto eterno, responsabilidad.

**PARA**:
Método de Tiago Forte: **P**rojects, **A**reas, **R**esources, **A**rchive. Organiza lo *accionable*, no el conocimiento. Convive con org-roam, que organiza el conocimiento por enlaces.
_Avoid_: Sistema de carpetas.

> **Aviso de tensión (importante):** PARA organiza por *ubicación* (jerarquía). Org-roam organiza por *enlaces* (red). No son enemigos, pero mezclarlos sin entender la diferencia es la causa #1 de que un segundo cerebro se pudra.

## Trabajo en ciclos

**Sprint / trimestre** (en trabajo por ciclos):
El sprint es un *proyecto* finito (se archiva al cerrar); el trimestre, la capa de organización y memoria entre el producto y los sprints. El producto en evolución es un *área*, no un proyecto.
_Avoid_: Fase, milestone.

**Fuente de verdad** (source of truth):
La regla de no duplicar: el estado de cada ticket vive en el tracker del equipo (Jira/GitLab); el segundo cerebro guarda decisiones, contexto y aprendizajes referenciando tickets por ID/URL.
_Avoid_: Sincronizar, duplicado.
