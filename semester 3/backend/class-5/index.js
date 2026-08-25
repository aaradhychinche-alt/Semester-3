// // GET     /products

// // GET     /products/3

// // GET     /products?category=mobile

// // POST    /products

// // PUT     /products/3

// // DELETE  /products/3


let express = require('express')

let app = express()

let cors = require('cors')
app.use(cors())
let products = [
    {
        id: 1,
        name: "iPhone 15",
        category: "mobile",
        price: 69999,
        stock: 10
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "mobile",
        price: 64999,
        stock: 8
    },
    {
        id: 3,
        name: "MacBook Air",
        category: "laptop",
        price: 99999,
        stock: 5
    },
    {
        id: 4,
        name: "Dell XPS 14",
        category: "laptop",
        price: 89999,
        stock: 7
    },
    {
        id: 5,
        name: "AirPods Pro",
        category: "headphones",
        price: 24999,
        stock: 15
    },
    {
        id: 6,
        name: "Sony XM5",
        category: "headphones",
        price: 29999,
        stock: 12
    }
];


app.use(express.json())


app.get('/', (req,res)=>{
    res.send(products)
    //res.send("hehe")
})



// // GET     /products/3
app.get('/products/:id', (req,res)=>{
    let {id} = req.params

    let data = products.find((a)=>{
        return a.id==Number(id)
    })
    if(!data){
        return res.status(404).json({msg:"Not Found"})
    }

    res.status(200).json({msg:data})
    //console.log(data, "iddd");
    //console.log(id, "iddd");
    
})



app.get('/search', (req,res)=>{
    let {category} = req.query
    //console.log(category, "category");
    
    let data = products.filter((a)=>{
        return a.category==category
    })
    //console.log(data,"hehe");
    if(!data){
        return res.status(404).json({msg: "Not Found"})
    }
    res.status(200).json({msg:data})
    
})



// // GET     /products?category=mobile
app.get('/products', (req, res) => {
    let { category } = req.query;

    let data = products.filter((a) => {
        return a.category == category;
    });

    if (!data) {
        return res.status(404).json({ msg: "Not Found" });
    }

    res.status(200).json({ msg: data });
});



// // POST    /products
app.post('/products', (req,res)=>{
    console.log(req.body);
    
    let obj = {
        ...req.body
    }

    products.push(obj)

    res.send("done")
})



// // PUT     /products/3
app.put('/products/:id', (req,res)=>{
    let {id} = req.params;
    console.log(req.body, "hehhh");

    let {stock} = req.body

    let data = products.find((a)=>{
        //console.log(a.id);
        

        return a.id==Number(id)
    })
    
    //console.log(data);
    
    data.stock = stock;
    res.json({msg:"done",data})
})



// // DELETE  /products/3
app.delete('/products/:id', (req,res)=>{
    let {id} = req.params;
    //console.log(id);

    let data = products.filter((a)=>{
        return a.id!=Number(id)
    })
    
    res.json({msg:"done",data})
    //console.log(data);
    
})



app.listen(4000, ()=>{
    console.log("server is running...");
})