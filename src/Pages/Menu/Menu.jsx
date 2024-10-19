// src/components/Menu.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import TagFilter from "./TagFilter/TagFilter";
import MenuItem from "./MenuItem/MenuItem";

const Menu = ({ title }) => {
  const {
    menu,
    loading,
    categories,
    tags,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
  } = useMenu();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-lg text-gray-500">Loading menu...</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title} | My Restaurant</title>
      </Helmet>

      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col items-center justify-betweeen md:flex-row gap-2 mb-6">
          <h2 className="flex flex-grow text-3xl font-bold text-primary">
            Our Menu
          </h2>

          <div className="flex md:gap-5">
            <CategoryFilter
              categories={categories}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />

            <TagFilter
              tags={tags}
              tagFilter={tagFilter}
              setTagFilter={setTagFilter}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
