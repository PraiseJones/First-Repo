const http = require('http');

const server = http.createServer(function(req, res){
    //Headers
    res.writeHead(200, { 'content-Type': 'text/html'})

    //send back some information
    // res.end("This is my first node sever")
    res.end(`
        <html>
        <body style="background-color: black; color: white; text-align: center;">
            <h1>Hey Server</h1>
            <p>Hello world it's my first server.</p>
        </body>
        </html>
    `);
});

server.listen(7000, '127.0.0.1')

console.log("Hurray, I just created a server!")