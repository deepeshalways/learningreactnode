const http = require('http');

const server = http.createServer();
//For Learning
//Event
//Stream
//clusters --- only node

server.on('request',(req,res) => {
  res.write("Hello node \n");

  setTimeout(() => {
    res.write("Stil on.....\n");
    res.end();
  },1000);

});

server.listen(8080);
