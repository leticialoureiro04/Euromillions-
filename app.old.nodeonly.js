http = require('http');

server = http.createServer();

server.on('request', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
    console.log('request received');
})

server.on('listening', function () {

    console.log('server em funcionamento na porta 3000');

});

server.listen(3000);

