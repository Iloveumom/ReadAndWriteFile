//include http module
const http=require("http");
//create server
const server=http.createServer((req,res)=>{
            const url=req.url;
            const method=req.method;
            if(url==='/')
            {
                    res.setHeader('Content-Type','text/html');
                    res.end(
                            `
                                <form>
                                        <label>Username:</label>
                                        <input type="text" name="username"/>
                                </form>
                            `
                    );
            }    
});
const port =3000;
server.listen(port,()=>{
     console.log("server running");
});