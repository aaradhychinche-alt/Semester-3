let express = require('express')
let app = express()
app.listen(3000)
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/new/:id',(req,res)=>{
    let {id}= req.params
    res.send(id)
})
app.get('/search',(req,res)=>{
       console.log(res.query,"hehe" );
       res.send("hehe")
})
app.post('/data', (req,res)=>{
    res.send(req);
    
})