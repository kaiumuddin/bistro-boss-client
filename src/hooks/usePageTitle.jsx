// src/hooks/usePageTitle.js
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} | Bistro Boss` : "Bistro Boss";
  }, [title]);

  return (
    <Helmet>
      <title>{title ? `${title} | Bistro Boss` : "Bistro Boss"}</title>
    </Helmet>
  );
};

export default usePageTitle;
