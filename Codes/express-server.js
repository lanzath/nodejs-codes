// using express
const app = require('express')(), path = require('path');

// creating a route to /
app.get('/', (req, res)=> {
    // sending index.html to the client
    res.sendFile(path.join(__dirname + '/index.html'));
});

// service started at port 8001 
app.listen(8001);
console.log('Server running at https://localhost:8001');
