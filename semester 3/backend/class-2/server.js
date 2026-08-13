// let http = require("http")
// let server = http.createServer((req,res)=>{
//     // res.end("hello")
//     if(req.url=='/'){
//         res.end("hello")
//     }else if(req.url=='/about'){
//         res.end("aboutt")
//     }else if(req.url=='/contact'){
//         res.end("contact")
//     }

// })
// server.listen(3000,()=>{
//     console.log("server runninggg......");

    
// })
let express = require('express')
let app = express()

// app.use((req, res ,next)=>{
//     console.log("main nhi jaane dunga");  //// this is bodygaurd of app.get()
//     next()
// })
// app.use((req , res , next)=>{
//     console.log("main bilkul nhi jaane dunga"); 
    
// })

app.get('/', (req, res)=>{
    res.send("hello server");

})
app.post('/',(req,res)=>{
    res.send("post serveer");
})
app.get('/about', (req, res)=>{
    res.send("hello about");

})

app.listen(3000);