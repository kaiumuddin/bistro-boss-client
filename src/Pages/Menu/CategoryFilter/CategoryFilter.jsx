// src/components/CategoryFilter.jsx
import React from "react";

const CategoryFilter = ({ categories, categoryFilter, setCategoryFilter }) => {
  return (
    <div>
      <label className="font-semibold text-text">Category:</label>
      <select
        className="border border-black p-2"
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
