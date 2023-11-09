import Banner from "../Banner/Banner";
import { useEffect, useState } from 'react';
import TopSellingFood from "../TopSellingFood/TopSellingFood";





const Home = () => {
    const [topSellingFood, setTopSellingFood] = useState([]);
    useEffect(() => {
        // Fetch top-selling food items when the component mounts
        fetch('http://localhost:5200/top-selling-food')
          .then(response => response.json())
          .then(data => setTopSellingFood(data))
          .catch(error => console.error('Error fetching top-selling food:', error));
      }, []);


    return (
   <div>
     <Banner></Banner>

    <h1 className="text-2xl font-bold italic lg:text-4xl text-center text-red-500  ">Top Selling Foods</h1>

  <div className="container mx-auto text-white shadow-2xl mt-10 py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3">
   {topSellingFood.map(food => (
        // <div key={food._id}>
        //   {/* Display food information here */}
        //   <p>{food.name}</p>
        //   {/* ... */}

        // </div>
       <TopSellingFood key={food._id} food={food}></TopSellingFood>

      ))}
   </div>
  </div>
    

  
    );
};

export default Home;