"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import {useState} from "react";

export default function Page() {
  const[items, setItems] = useState(itemsData);
  
  // const addItem = (items) => {
  //   setItems([...items]);
  // };

  // Function to generate a random ID with 18 characters (letters or numbers)
  const generateItemId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < 18; i++) {
      id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
  };
  const addItem = (name, quantity, category) => {
    const newItem = {id: generateItemId(), name, quantity, category,};
    setItems([...items, newItem]);
  };

  return (
    <div className="flex flex-col bg-gray-100">
       <NewItem onAddItem={addItem}/>   
       <ItemList items={items}/> 
      {/* <ItemList/> */}
   
    </div>
  );
}
