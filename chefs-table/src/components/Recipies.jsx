import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';


const Recipies = ({addRecipeToQueue}) => {
    const [recipies, setRecipies] = useState([])

    useEffect(() => {
        fetch('./recipie.json')
            .then(res => res.json())
            .then(data => setRecipies(data))

    }, [])


    return (
        <div className="md:w-2/3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    recipies.map(recipie => (
                        <div key={recipie.recipe_id} className="card bg-base-100 border-2">
                            <figure className="px-8 pt-6">
                                <img className="w-full md:h-52 rounded-xl"
                                    src={recipie.recipe_image}
                                    alt="recipie image" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-gray-800 font-semibold">{recipie.recipe_name}</h2>
                                <p className="text-gray-600 text-base">{recipie.short_description}</p>
                                <h3 className="text-lg text-gray-800 font-medium">Ingredients : {recipie.ingredients.length} </h3>
                                <ul className="ml-8">
                                    {
                                        recipie.ingredients.map((item, index) =>(
                                            <li key={index} className="text-gray-600 text-base list-disc">{item}</li>
                                        ))
                                    }
                                </ul>
                                <div className="flex gap-4 ">
                                    <div className="flex items-center">
                                    <i className="fa-regular fa-clock mr-2 text-2xl"></i> 
                                    <p><span className="text-gray-600 text-base">{recipie.preparing_time}</span>
                                    </p>
                                    </div>
                                    <div className="flex items-center">
                                    <i className="fa-solid fa-fire-flame-curved mr-2 text-2xl"></i> 
                                    <p><span className="text-gray-600 text-base">{recipie.calories}</span>
                                    </p>
                                    </div>
                                </div>
                                <div className="card-actions">
                                    <button onClick={()=>addRecipeToQueue(recipie)} className="btn bg-green-400 rounded-full px-8 text-gray-800 mt-6 font-medium">Want To Cook</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

Recipies.propTypes = {
    addRecipeToQueue: PropTypes.func.isRequired
}
export default Recipies;

// {
//     "recipe_image": "https://i.ibb.co.com/P1VPzbg/1.jpg",
//     "recipe_id": 101,
//     "recipe_name": "Spaghetti Carbonara",
//     "short_description": "Classic Italian pasta dish with a creamy, cheesy sauce.",
//     "ingredients": [
//       "200 g spaghetti",
//       "150 g pancetta",
//       "2 large eggs",
//       "100 g Parmesan cheese",
//       "2 cloves garlic",
//       "Salt and black pepper"
//     ],
//     "preparing_time": "20 min",
//     "calories": "400 calories"
//   }