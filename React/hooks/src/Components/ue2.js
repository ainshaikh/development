import React, {useEffect, useState} from 'react'

function Ue2() {
    const [Count, setCount]=useState(0);
    // first render is called then 
    //component Did Mount 
    useEffect(()=>{
        console.log("useEffect is called");
        document.title=`Button Clicked ${Count}times`;

    },[]);
    console.log("render");
 

  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <h1>{Count}</h1>
        <button onClick={()=>setCount(Count-1)}>-</button>
      >

    </div>
  )
}

export default Ue2