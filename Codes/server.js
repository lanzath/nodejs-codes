// Creating a server with Node

// http and filesystem module require
const http = require('http'), fs = require('fs');

// creating a http server
http.createServer((req, res) => {
    // header response
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    })

    // html reading
    let readStream = fs.createReadStream(__dirname + '/index.html');

    // sending to client
    readStream.pipe(res);
}).listen(8000);

// informs endpoint to the user
console.log('Visite-me em: https://localhost:8000');
