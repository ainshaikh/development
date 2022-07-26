import React, {useState} from 'react'

function Us() {
    const [Count, setCount]=useState(0);
    const [emoji, setEmoji]=useState("😂");
    const [msg, setMsg]=useState({sayHi:"I am Hooked"})

  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>+</button>
        <h1>{Count}</h1>
        <button onClick={()=>setCount(Count-1)}>-</button>
        <div>
            <button onClick={()=>setEmoji("😂")}>Laugh</button>
            <p>{emoji}</p>
            <button onClick={()=>setMsg("😭")}>Sad</button>
            <p>{msg.sayHi}</p>
        </div>

    </div>
  )
}

export default Us