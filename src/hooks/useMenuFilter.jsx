// src/hooks/useMenuFilter.js
import { useMemo, useState } from "react";

const useMenuFilter = (menu) => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("");

  const filteredMenu = useMemo(() => {
    let filtered = menu;

    if (categoryFilter !== "All") {
      filtered = filtered.filter((item) => item.category === categoryFilter);
    }

    if (tagFilter) {
      filtered = filtered.filter((item) => item.tags.includes(tagFilter));
    }

    return filtered;
  }, [menu, categoryFilter, tagFilter]);

  const categories = useMemo(() => {
    const allCategories = [
      "All",
      ...new Set(menu.map((item) => item.category)),
    ];
    return allCategories;
  }, [menu]);

  const tags = useMemo(() => {
    const allTags = new Set();
    menu.forEach((item) => {
      item.tags.forEach((tag) => allTags.add(tag));
    });
    return ["", ...allTags];
  }, [menu]);

  return {
    filteredMenu,
    categories,
    tags,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
  };
};

export default useMenuFilter;
