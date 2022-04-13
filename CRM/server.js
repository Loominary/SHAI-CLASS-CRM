const http = require("http");

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Heyo');
}).listen(3001);

console.log('server running at http://localhost:3001');