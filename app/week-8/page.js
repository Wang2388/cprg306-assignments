"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import Items from "./items.json";
import { useState } from "react";

export default function Page() {
  const [itemsData, setItemsData] = useState(Items);

  const addItem = (newItem) => {
    setItemsData((prevItems) => [...prevItems, newItem]);
  };

  return (
    // <main className="flex flex-col bg-gray-100">
    <main className="flex flex-col justify-start w-full min-h-screen text-white bg-slate-950">
      <h1 className="text-4xl font-bold ">Shopping List</h1>
      {/* <div className="flex"> */}
      <div className="w-full h-[300px] bg-white">
        <NewItem onAddItem={addItem} />
        <ItemList items={itemsData} />
      </div>
    </main>
  );
}
