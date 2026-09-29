# Experiencia previa: cero contenedores

El usuario declaró que nunca usó Docker ni Podman (nivel "ninguno"), prefiere solo terminal (sin GUI) y prioriza dev web en contenedores antes que tests e2e con WebdriverIO.

Implicaciones: no se puede asumir ningún vocabulario de contenedores (imagen, volumen, puerto, daemon); cada lección debe definir sus términos. El orden de la misión queda fijado: máquina → run/volumes → Containerfile con Node/Chrome → WebdriverIO. Ver [[MISSION.md]].
