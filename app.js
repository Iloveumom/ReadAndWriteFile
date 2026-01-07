//include http module
const http=require("http");
const fs=require("fs");
//create server
const server=http.createServer((req,res)=>{
        
            const url=req.url;
            const method=req.method;
            if(url==='/')
            {
                    res.setHeader('Content-Type','text/html');
                    res.end(
                            `
                                <form action="/message" method="post">
                                        <label>Username:</label>
                                        <input type="text" name="username"/>
                                        <button type="submit">Add</button>
                                </form>
                            `
                    );
            }
            else if(url==='/message')
            {
                    res.setHeader('Content-Type','text/html');
                    let datachunk=[];
                    req.on("data",(chunk)=>{
                        //console.log(chunk);
                        datachunk.push(chunk);
                    });
                    req.on("end",()=>{
                        let combinedBuffer=Buffer.concat(datachunk);
                        //console.log(combinedBuffer.toString());
                        let values=combinedBuffer.toString().split("=")[1];
                        //console.log(values);
                        fs.writeFile("formData.txt",values,(err)=>{
                                        //console.log(err);
                                        res.statusCode=302;
                                        res.setHeader("Location","/");
                                        res.end();
                        });
                    });
            }
            else if(url==='/read')
            {
                                fs.readFile("formData.txt",(err,data)=>{
                                                console.log(data.toString());
                                                res.end();
                                });
            }
});
const port =3000;
server.listen(port,()=>{
     console.log("server running");
});