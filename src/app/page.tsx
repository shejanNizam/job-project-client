import AllAccordian from "@/components/Home/AllAccordian";
import Banner from "@/components/Home/Banner";
import Menus from "./menu/page";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Menus />
      <Banner />
      <AllAccordian />
    </>
  );
};

export default HomePage;
