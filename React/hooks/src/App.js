// import logo from './logo.svg';
import './App.css';
import Ue1 from './Components/Ue1';
import Us from './Components/Us';
import Ue2 from './Components/ue2'; 
import Infinite from './Components/Infinite';
import Ue3 from './Components/Ue3';
import Context from './Components/Context';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
function App() {
  const [theme, setTheme] = useState(false);
  const[count, setCount] = useState(10);
  return (
    <Context.Provider value={theme}>
     
      <button onClick={()=>setTheme(!theme)}>Change theme</button>
   {/* <Us/>
   <Ue1></Ue1>
   <Ue2></Ue2>
  <Infinite></Infinite>
  <Ue3></Ue3> */}
  <Navbar/>
  <Parent1/>
  <Parent2/>
  </Context.Provider>
  );
}

export default App;
