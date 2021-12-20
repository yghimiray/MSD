import React, { useState, useRef } from "react";
import AppForUseForm from "./AppForUseForm";
import MessageComponent from "./MessageComponent";
import CounterComponent from "./CounterComponent";

export const myContext = React.createContext()



function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState({email:"",password:""});
  const [LoginMsg, setLoginMsg] = useState("Please Log in");

  const myRef =   useRef();

  // const handleChange = e => setValue(e.target.value);
  // const handleClick = () => setCount(count +1 );


  return (
    <div>
      <h1 ref={myRef} > Message Testing </h1>
      <myContext.Provider value = {{count, setCount}}>
      <CounterComponent></CounterComponent>
      </myContext.Provider>
      
     {/* <p> <button type="button" onClick={handleClick}>Increase Count</button> </p> */}
      {/* <input type="text" value={value} onChange={handleChange} /> */}
      <myContext.Provider value ={{value, setValue, LoginMsg, setLoginMsg,myRef}} >
      <MessageComponent></MessageComponent>
      </myContext.Provider>
     
      <h1> Useform Testing </h1>
      {/* <AppForUseForm></AppForUseForm> */}

    </div>);
}

export default App;
