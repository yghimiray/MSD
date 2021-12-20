import React, {useContext } from "react";
import { myContext } from "./App";


export default function CounterComponent () {
    
    const {count,setCount}  = useContext(myContext);
    const handleClick = ()=> setCount(count +1 );
     const button = <p><button type="button" onClick={handleClick}>Increase Count</button> </p>
    return <strong>{ [count, button]}</strong>;
}


// export default CounterComponent;