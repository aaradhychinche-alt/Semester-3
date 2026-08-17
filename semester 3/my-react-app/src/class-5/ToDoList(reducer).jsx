import React, { useReducer, useState } from 'react'

const ToDoList = () => {
    
     let data ={
      input :"",
      list:[]
     }
     let[state, dispatch]= useReducer(reduser, data)
    function reduser(state,action){
          if(action.type=="inp"){
            return {
              ...state,
              input:action.payload

            }
          }else if(action.type=="add"){
            return {
              list:[...state.list , state.input]
            }
          }else if(action.type=="del"){
              return{
                ...state,
                list : state.list.filter((_,id)=> id!==action.payload)
              }
          }
    }
  return (
    <div>
     <input onChange={(e)=>dispatch({type:"inp",payload:e.target.value})}></input>
     <button onClick={()=>dispatch({type:"add"})}>add to list</button>
     {
  state.list.map((a,id)=>{
      return(
        <>
        <li onClick={()=>dispatch({type:"del" , payload:id})}>{a}</li>

        </>
      )    
      
  })
}
    </div>
  )
}

export default ToDoList