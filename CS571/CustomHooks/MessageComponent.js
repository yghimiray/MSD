import React,{ useContext } from "react";
import { myContext } from "./App";

const MessageComponent = React.memo(function MessageComponent(){
    const {value, setValue,LoginMsg, setLoginMsg,myRef} = useContext(myContext);
    const handleChange = (event) => {
      setValue(prevValue=>({...prevValue,[event.target.name]:event.target.value}));
    }

    const emailInput = <input type="text" name= 'email' value={value.email} onChange={handleChange} />
    const passwordInput = <input type={Number} name='password' value={value.password} onChange={handleChange} />
    
    const login = ()=>{
      if(value.email==="yghimiray@miu.edu" && Number(value.password)===123){
        setLoginMsg("You are logged in")
        myRef.current.innerHTML = "Testing Completed"
        myRef.current.style.color = 'red'
      }else{
        setLoginMsg("Warning! Incorrect login credentials. Please Log in")
      }
    }

    const button = <button onClick ={login} >Login </button>
    // console.log(`rendering MSG`);
    return <div>
      Email: {emailInput}
      Password: {passwordInput}
      <p>{value.email}</p>
      <p>{value.password}</p>
      <p>{button}</p>
      <p>{LoginMsg}</p>
      {/* <p ref={myRef}>{LoginMsg}</p> */}
    </div>;
})


  export default MessageComponent