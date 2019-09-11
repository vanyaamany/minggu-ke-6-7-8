conts fs = require('http');
fs.createServer(function(req,res){
    res.writeHead(200,{
        "contet-type":"text/html"
    });
    res.end("hello wold");
}).listen(8000);

console.log('server is running at port 8000')