// src/components/TagFilter.jsx
import React from "react";

const TagFilter = ({ tags, tagFilter, setTagFilter }) => {
  return (
    <div>
      <label className="font-semibold text-text">Filter by Tag:</label>
      <select
        className="border border-black p-2"
        value={tagFilter}
        onChange={(e) => setTagFilter(e.target.value)}
      >
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag || "All"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagFilter;
