import React, { useReducer } from 'react'
const initialstate=0;
const reducer=(state,action)=>{
    console.log(state,action)
    if(action.type === "increment"){
        return state + 1;
    }
    if(action.type === "decrement"){
        return state - 1;
    }
    return state;

}

export const UseReducer = () => {
  const [state,dispatch]=     useReducer(reducer,initialstate);
  return (
    <div>UseReducer
<h4>{state}</h4>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    </div>
  )
}
