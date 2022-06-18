import React from 'react'
import { useContext } from 'react';
// import { Link, Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { CartContext } from './context/CartContext';
import { LogContext } from './context/LogContext';
import "../App.css"

const Navbar = () => {
    const {counter} =useContext(CartContext)
    const {isAuth} = useContext(LogContext)
  return (
    <div className='navbar'>
       
<NavLink  to="/HomePage">HomePage</NavLink>
<NavLink  to="/SignIn">{isAuth?"SignOut":"SignIn"}</NavLink>
{isAuth && <NavLink className="cartlink" to="/Cart">Cart:{counter}</NavLink>}


</div>
  )
}

export default Navbar