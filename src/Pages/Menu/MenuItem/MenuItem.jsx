// src/components/MenuItem.jsx
import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div className="bg-background p-6 border border-black shadow-brutal rounded-none">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover mb-4"
      />
      <h3 className="text-xl font-bold text-primary">{item.name}</h3>
      <p className="text-text mt-2">{item.description}</p>
      <p className="mt-2 font-semibold">${item.price.toFixed(2)}</p>
      <div className="mt-2">
        {item.tags.includes("popular") && (
          <span className="inline-block bg-yellow-500 text-white px-2 py-1 rounded mr-2">
            Popular
          </span>
        )}
        {item.tags.includes("latest") && (
          <span className="inline-block bg-blue-500 text-white px-2 py-1 rounded">
            Latest
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
