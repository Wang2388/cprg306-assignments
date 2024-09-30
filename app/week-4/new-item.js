"use client"

import { useState } from "react"

export default function Quantity () {
    const [quantity, setQuantity] = useState(1);
    const [flagDisable, setFlagDisabled] = useState(false);
     

    const increment = () => {
        if (!flagDisable){
            if (quantity < 20){
            setQuantity(quantity + 1);                  
        }else {
            setFlagDisabled(false);
        }
      }  
    }
    const decrement = () => {
        if (!flagDisable){
            if (quantity > 1){
            setQuantity(quantity - 1);                  
        }else {
            setFlagDisabled(false);
        }
      }  
    }
    return (
        <div className = "flex flex-col justify-start items-center h-screen">
            <p className = "text-2xl mt-4">Quantity : {quantity}</p><br/>
            <div className ="flex flex-row">
            <button onClick = {increment} 
                className =  " bg-gray-200 active:bg-red-200 rounded w-20"      
            >
            +   
            </button>
            <button onClick = {decrement}
                className = " bg-gray-200 active:bg-red-200 rounded w-20"
            >
            -   
            </button>
            </div>
        </div>
    );
}