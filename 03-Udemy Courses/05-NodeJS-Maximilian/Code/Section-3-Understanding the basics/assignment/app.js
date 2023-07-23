const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Main Page</title></head>');
    res.write(
      '<body><h1>Greetings!</h1><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Create</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write(
      '<body><h1>The Users List</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>'
    );
    res.write('</html>');
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
  }
});

server.listen(3000);
