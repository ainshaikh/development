import React, {useEffect, useState} from 'react'

function Ue3() {
    const [Count, setCount]=useState(0);
    const [msg, setMsg]=useState({sayHi:"I am Hooked"});
    // first render is called then 
    //This will be used when we want useEffect to only run when particular state is changed.
    useEffect(()=>{
        console.log("useEffect is called");
        document.title=`Button Clicked ${Count}times`;
    },[Count]);

        let changeText = (e)=>{
            msg.sayHi=e.target.value;
            console.log(msg);
            setMsg({...msg})
        }


    
    console.log("render");
 

  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <h1>{Count}</h1>
        <button onClick={()=>setCount(Count-1)}>-</button>
      
      <input type = "text" value={msg.sayHi} onChange = {(e)=>changeText(e)}></input>

    </div>
  )
}

export default Ue3