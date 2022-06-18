import axios from 'axios';
import React from 'react'
import { useEffect, useState, useContext } from 'react';
import "../App.css"
import { CartContext } from './context/CartContext';

const Cart = () => {
    const [data,setData] = useState([])
    const [count,setCount] = useState(0)
    const {counter} =  useContext(CartContext)
    useEffect(()=>{
        axios.get("http://localhost:8080/data").then((res)=>{
            setData(res.data)
        })
    },[])
  return (
    <div className='cart'>
{
    data.map((item)=>{
        if(item.id<=counter){
            // eslint-disable-next-line no-lone-blocks
            {return(
                <div>
                <h2>{item.title}</h2>
               
            
            
                </div>
)                    
            }   
        }


    })
}
       
       <div>
        <h4>Total-Price:-price</h4>
        <button onClick={()=>{if(count>0){alert("order Placed")}
    else 
    {alert("Please add Item or Login first")}}}>Buy</button>


       </div>
    </div>
  )
}

export default Cart