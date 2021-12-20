import React, { useState } from "react";

const useForm = function(obj){

const [state, setstate] = useState(obj)

const handleChange = (event)=> {
    setstate(prevState=>({...prevState,[event.target.name]: event.target.value}))
}


return [state, handleChange];
}

export default useForm;