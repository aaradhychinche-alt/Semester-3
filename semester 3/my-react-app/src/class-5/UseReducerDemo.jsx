import React, { useReducer } from 'react'

const UseReducerDemo = () => {
    let[state,dispatch]=useReducer(reduser , 0)
    function reduser(state,action){
      if(action.type=="inc"){
        return state+1
      }else if(action.type=="dec"){
        return state-1
      }else if(action.type=="res"){
        return 0
      }else{
        return state
      }
       


    }
  return (
    <div>
<h2>{state} </h2>
<button onClick={()=>dispatch({type:"inc"})}>add</button>
<button onClick={()=>dispatch({type:"dec"})}>dec</button>
<button onClick={()=>dispatch({type:"res"})}>reset</button>

    </div>
  )
}

export default UseReducerDemo