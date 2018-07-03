var http = require("http");

http.createServer(function (request,response){
  response.writeHead(200,{'Content-type':'text/plain'});

  response.end("Hello World");
}).listen(3000);

console.log("Server running in http://localhost:3000");
