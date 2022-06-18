import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';

const Products = () => {
const [prod,setProd] = useState([])

const {counter,setCounter} = useContext(CartContext)

    useEffect(()=>{
axios.get("http://localhost:8080/data").then((res)=>{
    setProd(res.data)

})
    },[])
  return (
    <div>
{prod.map((item)=>{
    return(
        <div>

        <h1>{item.title}</h1>

        <button onClick={()=>setCounter(counter+1)}>Add to Cart</button>
        </div>

    )
})}

    </div>
  )
}

export default Products