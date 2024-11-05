"use client";

import { useState } from "react";
import React from "react";
import items from "./items.json";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [flagDisable, setFlagDisabled] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const newPurchase = () => {
    alert(
      `Added items: ${name}., quantity: ${quantity}, category: ${category}`
    );
  };

  //Increase quantity using boolean flag to control not greater than twenty
  const increment = () => {
    if (!flagDisable) {
      if (quantity < 20) {
        setQuantity(quantity + 1);
      } else {
        setFlagDisabled(false);
      }
    }
  };

  //Decrease quantity using boolean flag to control not less than one
  const decrement = () => {
    if (!flagDisable) {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      } else {
        setFlagDisabled(false);
      }
    }
  };
  // Get the value when name changes
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  // Get the value when quantity changes
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  // Get the value when category changes
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  //Generate new id with 18 digits of alternating alphabet and numbers
  const generateItemId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";

    for (let i = 0; i < 18; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };

  // Form submission handling
  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      id: generateItemId(),
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItem(item);

    // Form reset
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <main className="flex flex-col justify-start w-full h-300px  text-white bg-black">
      <h2 className="text-3xl font-bold text-white m-2">Enter Item:</h2>
      <form
        onSubmit={handleSubmit}
        className="p-2 m-4 text-black max-w-sm w-full"
      >
        {/* User Input */}
        <div className="mb-2">
          <input
            type="text"
            placeholder="Item name"
            required
            id="name"
            value={name}
            onChange={handleNameChange}
            className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          />
        </div>

        <div className="flex justify-between">
          <div className="p-2 mt-1 mb-1 rounded-md  bg-white text-white w-36">
            <div className="flex justify-between">
              <span className="text-black">{quantity}</span>
              <div onChange={handleQuantityChange} className="flex">
                <button
                  type="button"
                  onClick={decrement}
                  className="w-8 bg-blue-500 text-white 
                        font-semibold rounded-lg shadow-md hover:bg-blue-700 
                        focus:outline-none focus:ring-2 disabled:bg-gray-400
                         focus:ring-blue-400 focus:ring-opacity-75"
                  disabled=""
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={increment}
                  className="w-8 bg-blue-500 text-white 
                        font-semibold rounded-lg shadow-md hover:bg-blue-700 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 
                        disabled:bg-gray-400 focus:ring-opacity-75 ml-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <select
            onClick={handleCategoryChange}
            className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
          >
            <option value="" disabled="">
              Category
            </option>
            <option value="produce" selected="">
              Produce
            </option>
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

        {/* Submit button */}
        <button
          type="submit"
          onClick={newPurchase}
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white 
                font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 
                focus:ring-opacity-75"
        >
          +
        </button>
      </form>
    </main>
  );
}
