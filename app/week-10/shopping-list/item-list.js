"use client";

import Item from "./items";
import itemsJson from "../items.json";
import React, { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  const [groupedItems, setGroupedItems] = useState(itemsJson);

  const getSortedItems = () => {
    let sortedItems = [...itemsJson]; // a copy of items.json

    if (sortBy === "name") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy == "category") {
      sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    }
    return sortedItems;
  };

  const handleSortByName = () => {
    setSortBy("name");
    setGroupedItems(getSortedItems());
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGroupedItems(getSortedItems());
  };

  const handleGroupByCategory = () => {
    setSortBy("group by category");
    setGroupedItems(
      itemsJson.reduce((accumulator, item) => {
        if (!accumulator[item.category]) {
          accumulator[item.category] = [];
        }
        accumulator[item.category].push(item);
        return accumulator;
      }, {})
    );
  };

  const sortItems = getSortedItems();

  return (
    <main className="flex flex-col justify-start w-full h-300px text-white bg-slate-950 p-4">
      <div className="flex flex-row px-4 space-x-4">
        <label htmlFor="sort">Sort by: </label>
        <button
          className="p-1 m-2 w-28 bg-orange-700"
          onClick={handleSortByName}
          disabled={sortBy === "name"}
        >
          Name
        </button>
        <button
          className="p-1 m-2 w-28 bg-orange-700"
          onClick={handleSortByCategory}
          disabled={sortBy === "category"}
        >
          Category
        </button>
        <button
          className="p-1 m-2 w-28 bg-orange-700"
          onClick={handleGroupByCategory}
          disabled={sortBy === "group by category"}
        >
          Group Category
        </button>
      </div>

      <div className="p-4">
        {sortBy === "group by category" ? (
          Object.keys(groupedItems).map((category) => (
            <div key={category} className="mb-4">
              <h3 className="text-xl font-bold text-white capitalize">
                {category}
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {Array.isArray(groupedItems[category]) &&
                groupedItems[category].length > 0 ? (
                  <p>No items found in this category.</p>
                ) : (
                  groupedItems[category].map((item) => (
                    <li key={item.id}>
                      <Item
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))
        ) : (
          <ul>
            {sortItems.map((item) => (
              <li
                key={item.id}
                className="p-2 m-4 bg-slate-900 max-w-sm rounded"
              >
                <h2 className="text-xl font-bold">{item.name}</h2>
                <div className="text-sm">
                  Buy {item.quantity} in {item.category}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
