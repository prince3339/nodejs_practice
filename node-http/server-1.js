var http = require('http');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer((req, res) => {
  console.log(req.headers);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello world...</h1>');
});
