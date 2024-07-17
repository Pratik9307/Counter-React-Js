import { useState } from "react";
import "./App.css";

function App() {
 
  const[count,setCount]=useState(0)
  function decreaseHandler(){
        setCount(count -1)
  }

  
  function increasesHandler(){
    setCount(count +1)


  }
  function resetHandler(){
    setCount(0);
  }
  
  
  return (
   <div className="container-wrapper">
       <div className="child-container"> Increment && Decrement</div>
       <div className="child-with-child">
         <button onClick={decreaseHandler} className="btn-1">
            -
         </button>
       
         <div className="mid">
          {count}

         </div>
         <button onClick={increasesHandler} className="btn-2">
            +
         </button>
     </div>

     <button onClick={resetHandler} className="reset-btn">
      reset
     </button>
   </div>
    
  );
}

export default App;
