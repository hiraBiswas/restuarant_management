import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";


const AllFood = () => {
    const allFood = useLoaderData();
    
    
    return (
        <div className="container mx-auto shadow-2xl mt-10 py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3"> 
        {
              allFood.map(food => (
                  <FoodCard key={food._id} food={food}></FoodCard>
              ))
              }
        </div>
    );
};

export default AllFood;