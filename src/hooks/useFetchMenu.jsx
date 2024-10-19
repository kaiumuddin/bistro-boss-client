// src/hooks/useFetchMenu.js
import { useEffect, useState } from "react";

const useFetchMenu = (url = "/menu.json") => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMenu(data);
      } catch (error) {
        console.error("Error fetching menu data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [url]);

  return { menu, loading };
};

export default useFetchMenu;
