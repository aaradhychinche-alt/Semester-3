let http = require("http")
let server = http.createServer((req,res)=>{
    res.appendHeader("hello")
})
server.listen(300,(=>{
    console.log("serve runnninnggg");
}))