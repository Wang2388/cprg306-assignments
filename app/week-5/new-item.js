"use client"

import { useState } from "react"

export default function Quantity () {
    const [quantity, setQuantity] = useState(1);
    const [flagDisable, setFlagDisabled] = useState(false);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
     
    
    
    const handleSubmit = (event)=>{
        event.preventDefault();
    }

    const newPurchase = () => {
            alert(`Added items: ${name}., quantity: ${quantity}, category: ${category}`)
            };

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
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    return (
        <main className="flex justify-center w-full h-screen bg-black">
            <form onChange={handleSubmit} className = "p-2 m-4 text-black max-w-sm w-full">
                <div className="mb-2">
                    <input type="text" placeholder="Item name" required="" id="name"  
                    value={name} onChange={handleNameChange}
                    className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"/>
                </div>
                <div className="flex justify-between">
                    <div className="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
                        <div className="flex justify-between"><span className="text-black">{quantity}</span>
                        <div onChange={handleQuantityChange} className="flex">
                        <button type="button" onClick = {decrement} className="w-8 bg-blue-500 text-white 
                        font-semibold rounded-lg shadow-md hover:bg-blue-700 
                        focus:outline-none focus:ring-2 disabled:bg-gray-400
                         focus:ring-blue-400 focus:ring-opacity-75" disabled="">-</button>
                        <button type="button" onClick = {increment} className="w-8 bg-blue-500 text-white 
                        font-semibold rounded-lg shadow-md hover:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 
                        disabled:bg-gray-400 focus:ring-opacity-75 ml-1">+</button>
                        </div>
                    </div>
                </div>
                <select onChange={handleCategoryChange} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans">
                    <option value="" disabled="">Category</option>
                    <option value="produce" selected="">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <button type="submit" onClick={newPurchase} className="w-full mt-4 py-2 px-4 bg-blue-500 text-white 
                font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                focus:ring-opacity-75">+</button>
            </form>
        </main>
    );
}