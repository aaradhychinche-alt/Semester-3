let express= require("express")
let mongoose=   require('mongoose')
let bcryptjs=  require('bcryptjs')
let app=  express()
let User=  require('/Users/aaradhychinche/Documents/System and Web Baics/Class-Work/semester 3/backend/class-6 (db)/db.js')
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/db").then(()=>{
   console.log("db......");
   
})
app.post("/signUp", async(req,res)=>{
   let {name,email,passWord}=req.body
  let findData=   await User.findOne({email})
  console.log(findData,"hjehehe");
  
  if(findData){
   return res.send("user jinda haii....")
  }else{
     let updateddP=   await bcryptjs.hash(passWord,10)
     console.log(updateddP,"dekhoooooo");
     
 let UserInfo=  new User({
      name,email,
      passWord:updateddP

   })
      await UserInfo.save()
      res.send("done.......")
  }


})







// 123 => abc => acb




// app.post('/',async(req,res)=>{
//    let {name,email,passWord}=req.body

//  let UserData=  new User({
//       name,email,passWord
//    })
//      await UserData.save()
//      res.send("doneeee")


//    // console.log(name,email,passWord);
   

// })


app.listen(3000,()=>{
   console.log("server......");
   
})