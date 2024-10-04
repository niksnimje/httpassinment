const http = require("http");
const fs=require("fs")

const myServer = http.createServer((req, res) => {
    if (req.url == "/home") {
        res.end("home Page")
    }
    else if (req.url == "/about") {
        res.end("about Page")
    } 
    else if (req.url == "/getproductdata") {
   
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if(err) res.end(err)
                let jsonData=JSON.parse(data)
                res.end(JSON.stringify(jsonData.products))
        })

    }
    else if  (req.url == "/user") {
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if(err) res.end(err)
                let jsonData=JSON.parse(data)
                res.end(JSON.stringify(jsonData.user))
        })
    }

})

myServer.listen(6969, () => {
    console.log("Server is Run ")
})
