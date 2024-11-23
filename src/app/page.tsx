import AllAccordian from "@/components/Home/AllAccordian";
import Banner from "@/components/Home/Banner";
import Menus from "./menu/page";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-10">Welcome To Home Page</h1>
      <Banner />
      <Menus />
      <AllAccordian />
    </div>
  );
};

export default HomePage;
