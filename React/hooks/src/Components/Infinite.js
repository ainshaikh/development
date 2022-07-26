import React, {useEffect, useState} from 'react'

function Infinite() {
    const [Count, setCount]=useState(0);
    // first render is called then 
    //component Did Mount
    useEffect(()=>{
        console.log("useEffect is called");
        document.title=`Button Clicked ${Count}times`;
        setCount(10);
        // let rnum = Math.random()*100;
        // setCount(rnum);


    })
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

export default Infinite