// src/components/Category.jsx
import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
  const categories = [
    { name: "Design", description: "Bold and creative designs to inspire." },
    {
      name: "Development",
      description: "Tools and frameworks for building your next project.",
    },
    {
      name: "Marketing",
      description: "Strategies to reach your audience effectively.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mt-8">
      <SectionTitle
        title="Our Categories"
        subtitle="Explore a variety of options"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-background p-6 border border-black shadow-brutal rounded-none"
          >
            <h3 className="text-xl font-bold text-primary">{category.name}</h3>
            <p className="text-text mt-2">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
