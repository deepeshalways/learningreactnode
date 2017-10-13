// const http = require('http');
// const fs = require('fs');

//For Learning
//Event
//Stream
//clusters --- only node

/** Normal Creation of sever **/
//const server = http.createServer();
//
// server.on('request',(req,res) => {
//   res.end(fs.readFileSync(__dirname+'/../client/index.html'));
// });
//
// server.listen(8080);

/** Now with the express **/
const express = require('express');
const app = express();

app.use(express.static('client'))
app.listen(8080);
