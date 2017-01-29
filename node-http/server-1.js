var http = require('http');
var fs = require('fs');
var path = require('path');

var hostname = 'localhost';
var port = 3000;

var server = http.createServer(function(req, res) {
  //console.log(req.headers);

  //res.writeHead(200, {'content-type': 'text/html'});
  //res.end('<h1>Hello World</h1>');

  console.log('Request for ' + req.url + ' by method ' + req.method);
  if(req.method == 'GET') {
    var fileUrl = req.url;

    if(req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    var filePath = path.resolve('./public'+fileUrl);
    var fileExt = path.extname(filePath);

    if(fileExt == '.html') {
      fs.exists(filePath, function(exists) {
        if(!exists) {
          res.writeHead(404, {'content-type': 'text/html'});
          res.end('<h1>Error 404: ' + fileUrl + ' not found. </h1>');
          return;
        }else {
          res.writeHead(200, {'content-type': 'text/html'});
          fs.createReadStream(filePath).pipe(res);
        }

      });
    }else {
      res.writeHead(404, {'content-type': 'text/html'});
      res.end('<h1>Error 404: ' + fileUrl + ' not a HTML file. </h1>');
    }
  }else {
    res.writeHead(404, {'content-type': 'text/html'});
    res.end('<h1>Error 404: ' + req.method + ' not supported. </h1>');
  }
});

server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
})
