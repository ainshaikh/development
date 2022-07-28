import React,{useContext} from 'react'
import Context from './Context'

function Navbar() {
    console.log(Context);
    const theme = useContext(Context);
  return (

    <div className={theme?"dark":"light"}>Navbar</div>
  )
}

export default Navbar