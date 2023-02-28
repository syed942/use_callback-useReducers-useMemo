import React, { useState } from 'react'
import ComponentDidUpdate from './ComponentDidUpdate'
import { UseCallBack } from './UseCallBack'

export const App = () => {
  const [name,setName]=  useState("asim")
  return (
    <div>App
      Name:
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <ComponentDidUpdate name={name} />
    <UseCallBack />
    {/* <button onClick={()=>setName("asgha ali")}>change name from app component</button> */}
    </div>
  )
}
