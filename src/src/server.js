// src/server.js
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    return response.end('OK');
  }

  // default response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('GTPcreated');
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

