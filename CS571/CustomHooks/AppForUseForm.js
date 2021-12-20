import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import useForm from "./useForm";

function AppForUseForm () {
  const[obj,setObj] = useState({ email: "", password: "" })
  const [formValues, handleChange] = useForm(obj);
  return (
    <div>
   Email: <input
      name="email"
      placeholder="email"
      value={formValues.email}
      onChange={handleChange}
    />
    Password: <input
      type="password"
      name="password"
      placeholder="password"
      value={formValues.password}
      onChange={handleChange}
    />
    <p>Email:{formValues.email}</p>
    <p>password:{formValues.password}</p>
  </div>  );
}

export default AppForUseForm;
