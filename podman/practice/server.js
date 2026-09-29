const http = require("http");
const os = require("os");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(`
    <!doctype html>
    <html lang="es">
      <head><meta charset="utf-8"><title>Demo server</title></head>
      <body style="font-family: system-ui; margin: 3rem auto; max-width: 40rem;">
        <h1>Hola desde el contenedor</h1>
        <p>Node ${process.version} corriendo en <strong>${os.hostname()}</strong></p>
        <p>Si ves esto en tu navegador, el código de tu Mac está corriendo dentro de un contenedor Podman.</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`Escuchando en http://0.0.0.0:${PORT}`);
});
