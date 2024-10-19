import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import usePageTitle from "../../hooks/usePageTitle";

const Home = ({ title }) => {
  usePageTitle("Home");
  return (
    <>
      {/* <Banner/> */}
      <Category />
    </>
  );
};

export default Home;
