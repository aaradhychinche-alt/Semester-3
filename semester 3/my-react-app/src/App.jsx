import React, { useState } from 'react'
import Home from './Home'
import UseEffectDemo from './class-2/UseEffectDemo'
import Navbar from './class-3/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './class-3/About'
import Contact from './class-3/Contact'
import Productlist from './class-4/Productlist'
import ProductD from './class-4/ProdcutD'
import UseReducerDemo from './class-5/UseReducerDemo'
import ToDoList from './class-5/ToDoList(reducer)'
import MemoDemo from './class-6/MemoDemo'
import { useEffect } from 'react'
import axios from 'axios'




const App = () => {
//  let [data,setData] =useState([])
//  // backend  getting data from the personalised server 
//  useEffect(()=>{
//   async function api() {
//     let res  = await axios.get('http://localhost:4000/')

//     console.log(res.data);
//     setData(res.data)
    
//   }
//   api()
//   // fetch('http://localhost:4000/').then((res)=>{
//   //   return res.json()
//   // }).then((data)=>{console.log(data);}
//   // )
//  },[])

  return (

     <div>

       {/* class-2 */}
      {/* <UseEffectDemo/> */}

      {/* class-3 */}
       {/* <Navbar/> */}


        {/* class-4 */}
      {/* <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/About' element={<About/>} /> */}
      {/* <Route path='/Contact' element={<Contact/>} /> */}
      {/* <Route path='/list'  element={<Productlist/>}/>
      <Route path='/p/:id' element={<ProductD/>} />
      </Routes> */}

      {/* class-5 */}
   {/* <UseReducerDemo/>
   <br/>
   <ToDoList/> */}
   {/* class-6 */}
   {/* <MemoDemo/> */}


   {/* <Assignments/> */}

   
   {
    // data.map((a)=>{
    //   return (
    //     <>
    //     <h1>{a.id}</h1>
    //     </>
    //   )
    // })
   }

  
    </div>
      

  )
}

export default App