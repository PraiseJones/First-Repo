const http = require('http');

const server = http.createServer(function(req, res){
    //Headers
    res.writeHead(200, { 'content-Type': 'text/plain'})

    //send back some information
    res.end("This is my first node sever")
});

server.listen(3000, '127.0.0.1')

console.log("Hurray, I just created a server!")