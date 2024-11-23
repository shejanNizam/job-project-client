import AllAccordian from "@/components/Home/AllAccordian";
import Banner from "@/components/Home/Banner";
import Menus from "./menus/page";

const HomePage = () => {
  // const res = await fetch("http://localhost:7000/menu");
  // const menuData = await res.json();

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
