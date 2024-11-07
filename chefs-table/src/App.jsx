import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipies from "./components/OurRecipies/OurRecipies";
import Recipies from "./components/Recipies";
import SideBar from "./SideBar";



const App = () => {
  return (
    <div className="container mx-auto px-3">
      {/* Header section */}
      <Header></Header>
      {/* Banner section */}
      <Banner></Banner>

      {/* Our recipies */}
      <OurRecipies></OurRecipies>

      {/* Recipie Cart Section */}
      <section className="flex flex-col md:flex-row gap-6">

        {/* Card section */}
        <Recipies></Recipies>

        {/* side bar */}
        <SideBar></SideBar>

      </section>



    </div>
  );
};

export default App;