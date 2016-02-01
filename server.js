'use strict';

const http = require('http');

http.createServer((req, res) => {
  console.log(req.method, req.url);

  res.writeHead(200, {
    'Content-type': 'text/html'
  });

  res.end('<<h1>Heyyyyy</h1>');
}).listen(3000, () => {
  console.log('node.js server started. listening on port 3000');
});
