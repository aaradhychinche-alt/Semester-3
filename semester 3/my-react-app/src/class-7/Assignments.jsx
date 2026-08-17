import React, { useEffect, useState } from 'react'

const Assignments = () => {
    let [input,setInput]=useState("");
    let [data,setData]=useState([])
    async function fun(){
        if(input.trim()==""){
           alert("Write Something")
           return;
        }
        let res = await fetch(`https://dummyjson.com/products/search?q=${input}`)
        let data = await res.json()
        console.log((data.products));
        
    }
    useEffect(()=>{
      fetch(`https://dummyjson.com/products`).then((res)=>res.json()).then((data)=>setData(data.products))

    }

   ,[])
   function asc(){
    let lis = [...data].sort((a,b)=>a.price-b.price)
    setData(lis)

   }
   function dsc(){
    let lis = [...data].sort((a,b)=>b.price-a.price)
    setData(lis)

   }
   function nxt(a){
    
let filtered = [];

    if (range === "0-100") {
        filtered = data.filter((item) => item.price >= 0 && item.price <= 100);
    }else if(range === "100-400") {
        filtered = data.filter((item) => item.price > 100 && item.price <= 400);
    }

    setData(filtered);

   }
  return (
    <div>
        <input onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={fun}>submit</button>
        <button onClick={asc}>asscend</button>
        <button onClick={dsc}>descend</button>
        <select>
            <option value="0-100">0-100</option>
            <option value="100-400">100-400</option>
        </select>
          {
          data.map((a)=>{
            return(
                <>
                <li>{a.price}</li>
                <img src={a.thumbnail}></img>
                </>
            )

            
          })

          

          
          }
    </div>
  )
}

export default Assignments