import { useState } from "react";
import "./App.css";


function App() {
  const[count,setcount]=useState(0);



  function decreasehandler(){
    setcount(count-1);
  }
  function increasehandler(){
    setcount(count+1);
  }
  function resethandler(){
    setcount(0);
  }
  return (
     <div className="w-[100vw] h-[100vh] bg-gray-500 flex flex-col justify-center items-center gap-10 ">
      <h3 className="text-[rgb(3,152,212)] font-medium text-2xl">Increment and Decrement</h3>
      <div className="bg-[white] flex justify-center  gap-12 py-3 text-[25px] ">
        <button onClick={decreasehandler} className="text-5xl border-r-2 text-center w-20">-</button>
        <div className="text-5xl w-20 text-center">{count} </div>
        <button onClick={increasehandler} className="text-5xl border-l-2 text-center w-20">+</button>
      </div>

      <button onClick={resethandler} className="bg-[#6a6ae4] text-center text-[white] py-3 px-3">Reset</button>
      
     </div>
  );
}


export default App;
