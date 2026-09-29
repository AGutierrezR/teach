# Mission: Podman para desarrollo web y tests e2e

## Why
Quiero correr mis proyectos de desarrollo web (Node, Chrome) en contenedores con Podman desde la terminal, para tener entornos reproducibles, y poder ejecutar tests e2e con WebdriverIO dentro de contenedores sin instalar nada extra en mi Mac.

## Success looks like
- Instalo Podman en mi Mac, levanto la `podman machine` y corro un contenedor desde la terminal sin fricción
- Corro un proyecto Node (dev server) en un contenedor con el código de mi Mac montado dentro (`-v`) y accedo al puerto desde mi navegador
- Construyo una imagen propia con un `Containerfile` que incluya Node y Chrome
- Ejecuto una suite de WebdriverIO (wdio) en un contenedor con Chrome headless y veo pasar los tests

## Constraints
- macOS Apple Silicon (arm64), sin Docker instalado, Podman recién instalado
- Cero experiencia previa con contenedores
- Solo terminal (sin Podman Desktop ni GUI)
- Prioridad: primero dev web en contenedores, después tests e2e con WebdriverIO
- Sesiones cortas, una lección por sesión

## Out of scope
- Kubernetes, orquestación y despliegues a producción
- Docker (salvo compatibilidad puntual de comandos)
- Compose multi-servicio hasta dominar `podman run`
- CI/CD (GitHub Actions) con contenedores
