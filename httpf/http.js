const http = require('http');

// create the http server 

const server = http.createServer((req, resp)=>{
    //the req = request;
    //resp = resp;
    if (req.url === '/') {
        resp.write('welcome to our home page');
    }else if(req.url === '/about'){
        resp.write('welcome to about page');
    }else{
        resp.write('this page can not be find');
    }
    resp.end();
})
const port = 3000;
server.listen(port);
console.log(`server running on ${port}`);