import { useLoaderData } from "react-router-dom";
import FoodCard from "../FoodCard/FoodCard";
import { useState } from "react";


const ITEMS_PER_PAGE = 9; 
const AllFood = () => {
    const allFood = useLoaderData();
    const {name } = allFood;
    
    const [filteredFood, setFilteredFood] = useState(allFood);
    const [currentPage, setCurrentPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
   // Display only the items for the current page
   const currentFoodPage = allFood.slice(startIndex, endIndex);


    const handleSearch = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const search = formData.get('search');
      console.log(search);
  
      // Update the filteredFood state based on the search input
      const filteredFoodResult = search
        ? allFood.filter((food) =>
            food.name.toLowerCase().includes(search.toLowerCase())
          )
        : allFood;
        setCurrentPage(1); 
      setFilteredFood(filteredFoodResult);
    };
    

    return (

        <div className="container mx-auto">
      <form className="p-5" onSubmit={handleSearch}>
        <input className="p-2 bg-black border-red-500 border-2 rounded-xl text-white" type="text" name="search" />
        <input type="submit" value="Search" className="btn bg-red-500 text-white" />
      </form>
      <div className="shadow-2xl py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3">
        {currentFoodPage.map((food) => (
          <FoodCard key={food._id} food={food}></FoodCard>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(allFood.length / ITEMS_PER_PAGE) }, (_, index) => (
          <button
            key={index + 1}
            className={`mx-2 px-4 py-2 rounded-full bg-red-500 text-white ${
              index + 1 === currentPage ? 'bg-white text-red-500' : ''
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    );
};

export default AllFood;