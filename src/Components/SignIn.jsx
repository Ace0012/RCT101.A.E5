import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { LogContext } from "./context/LogContext";
import '../App.css'
const SignIn = () => {
  const { isAuth, login, logout } = useContext(LogContext);

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const style1 = {
    display: "none",
  };
  const style2 = {
    display: "block",
  };
  return (
    <div  className="signin">
        <p>username:ace0012</p>
        <p>password:12345</p>
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => {
          setName(e.target.value);
        }}
        style={isAuth ? style1 : style2}
      />
      <br />
      <input
        style={isAuth ? style1 : style2}
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <br />

      <button
        onClick={() => {
          if (isAuth) {
           
            logout();
          } else {
            
            login(name, pwd);}

        }}
      >
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default SignIn;
