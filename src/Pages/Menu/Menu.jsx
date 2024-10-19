import React from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";

const Menu = ({ title }) => {
  const { menu, loading } = useMenu();

  if (loading) {
    return (
      <>
        <div className="container mx-auto px-4 py-8">
          <p className="text-lg text-gray-500">Loading menu...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-primary mb-6">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <div
              key={item.id}
              className="bg-background p-6 border border-black shadow-brutal rounded-none"
            >
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
