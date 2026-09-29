# Podman Resources

## Knowledge

- [Podman Installation (official)](https://podman.io/docs/installation)
  Instalación en macOS, Windows y Linux; explica `podman machine`. Use for: instalar y verificar la instalación.
- [Tutorial: Basic Setup and Use of Podman](https://github.com/containers/podman/blob/main/docs/tutorials/podman_tutorial.md)
  Tutorial oficial con los comandos básicos (`run`, `ps`, `inspect`, `logs`, `stop`, `rm`). Use for: la referencia primaria de sintaxis para las primeras lecciones.
- [Tutorial: Rootless Podman](https://github.com/containers/podman/blob/main/docs/tutorials/rootless_tutorial.md)
  Qué significa correr rootless, permisos de volúmenes, `--userns=keep-id`. Use for: montar directorios del host sin romper permisos.
- [podman-machine(1) man page](https://docs.podman.io/en/latest/markdown/podman-machine.1.html)
  Referencia oficial de la VM de macOS: `init`, `start`, `stop`, `ssh`. Use for: problemas con la máquina, arranque, reinicios.
- [Tutorial: Common network setups](https://github.com/containers/podman/blob/main/docs/tutorials/basic_networking.md)
  Puertos, pasta/rootless networking, redes de pods. Use for: `-p`/`--publish` y accesar contenedores desde el navegador en Mac.
- [How Podman runs on Macs — Red Hat blog](https://www.redhat.com/en/blog/podman-mac-machine-architecture)
  Arquitectura: cliente Podman + VM + gvproxy/pasta. Use for: entender *por qué* existe la machine en macOS.
- [WebdriverIO: Docker docs](https://webdriver.io/docs/docker)
  Receta oficial para correr wdio en un contenedor (imagen base selenium/standalone-chrome, flags `--no-sandbox --headless`). Use for: la fase e2e; traducir docker→podman.
- [WebdriverIO: Getting Started](https://webdriver.io/docs/gettingstarted)
  Instalación y config wizard de WebdriverIO (`npm init wdio@latest`). Use for: montar la suite antes de contenerizarla.

## Wisdom (Communities)

- [Podman Discord (oficial)](https://discord.com/invite/x5GzFF6QH4)
  Canal con los desarrolladores; buena señal de dudas de macOS/ports.
- [Podman Matrix #podman:matrix.org](https://matrix.to/#/#podman:fedoraproject.org)
  Chat oficial alternativo al Discord.
- [Podman GitHub Discussions](https://github.com/containers/podman/discussions)
  Preguntas de uso con respuestas de mantenedores; buscar antes de publicar.
- [r/podman](https://www.reddit.com/r/podman/)
  Subreddit de usuarios; útil para traps rootless en macOS.
- [WebdriverIO: Need Help? (community)](https://webdriver.io/community/support)
  Índice oficial de sus canales: Discord, GitHub Discussions, #webdriverio en Selenium Slack, Stack Overflow. Use for: dudas de wdio/conf.

## Gaps

- No se encontró aún un tutorial bueno en español de Podman para desarrollo web; las lecciones llenan ese hueco.
- Falta un recurso de alta confianza sobre correr Chrome dentro de contenedores en Apple Silicon (arm64) — pendiente de investigar para la fase e2e.
