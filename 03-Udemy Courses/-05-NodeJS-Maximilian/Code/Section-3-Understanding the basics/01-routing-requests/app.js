// with slash or dot slash to look for files, without it to look for modules
const http = require('http');
const fs = require('fs');
const { red } = require('@mui/material/colors');
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(req.url, req.method, req.headers);
  // process.exit();
  if (req.url === '/') {
    res.write('<html>');
    res.write('<head><title>Sending Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">SEND</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = '302';
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node Server</title></head>');
  res.write('<body><h1>This is my Node Server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
