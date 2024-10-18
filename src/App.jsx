import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './style.css'
import Adds from './style'
import Posts from './post'
import Detail from '../ditel'



function App(){




const [states,setState]= useState(true);

// let stor=0;

const handlevariadleCount =()=>{
  setState(!states)

  console.log(states);
}


// const handleStor=()=>{


// //   setState(state +1);
// }


//   const hero = (post) =>{
// console.log(post);
//   }
// console.log("hello vai");

  return (
    <>
  
    {/* <h1>the is stater count{state}</h1>
    <h1>the is stater count{stor}</h1>
    
    <h2 className='posts'>Hello wab dev </h2>
    
    <button onClick={handleStor}>open click</button>


    <button onClick={()=>hero("ami ar pari na")}>hero </button>
    */}

<button onClick={handlevariadleCount }>click me</button>
<br/>
{
  states?<Posts></Posts>:<Detail></Detail>
}

     
    </>
  )
}

export default App

