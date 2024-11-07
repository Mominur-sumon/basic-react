import { useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import OurRecipies from "./components/OurRecipies/OurRecipies";
import Recipies from "./components/Recipies";
import SideBar from "./SideBar";



const App = () => {

  const [recipieQueue, setRecipieQueue] = useState([])

  const addRecipeToQueue = (recipie) =>{
    const isExist = recipieQueue.find(item => item.recipe_id === recipie.recipe_id)
    // console.log(recipie);
    if(!isExist){
      setRecipieQueue([...recipieQueue, recipie])
    } else {
      alert('Already added to queue')
    }
  }

  console.log(recipieQueue);


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
        <Recipies addRecipeToQueue={addRecipeToQueue}></Recipies>

        {/* side bar */}
        <SideBar recipieQueue= {recipieQueue}></SideBar>

      </section>



    </div>
  );
};

export default App;