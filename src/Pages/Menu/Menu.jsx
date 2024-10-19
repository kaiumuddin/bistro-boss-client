// src/components/Menu.jsx
import React from "react";
import useMenu from "../../hooks/useMenu";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import TagFilter from "./TagFilter/TagFilter";
import MenuItem from "./MenuItem/MenuItem";
import Loading from "../../Components/Loading/Loading";
import usePageTitle from "../../hooks/usePageTitle";

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

  // Example: Dynamic title based on filters
  const dynamicTitle = `${
    categoryFilter !== "All" ? categoryFilter : "All Items"
  }${
    tagFilter
      ? ` - ${tagFilter.charAt(0).toUpperCase() + tagFilter.slice(1)}`
      : ""
  }`;

  // Use the dynamic title in the hook
  usePageTitle(dynamicTitle);

  if (loading) {
    return <Loading message="Loading menu..." />;
  }

  return (
    <>
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col items-center justify-between md:flex-row gap-2 mb-6">
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
