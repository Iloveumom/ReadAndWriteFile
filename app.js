//include http module
const http=require("http");
const routes=require("./routes");
//create server
const server=http.createServer(routes);
const port =3000;
server.listen(port,()=>{
     console.log("server running");
});