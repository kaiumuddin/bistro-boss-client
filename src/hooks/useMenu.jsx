// src/hooks/useMenu.js

import useFetchMenu from "./useFetchMenu";
import useMenuFilter from "./useMenuFilter";

const useMenu = (url = "/menu.json") => {
  const { menu, loading } = useFetchMenu(url);
  const {
    filteredMenu,
    categories,
    tags,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
  } = useMenuFilter(menu);

  return {
    menu: filteredMenu,
    loading,
    categories,
    tags,
    categoryFilter,
    setCategoryFilter,
    tagFilter,
    setTagFilter,
  };
};

export default useMenu;
