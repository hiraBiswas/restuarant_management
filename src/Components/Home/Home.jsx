import Banner from "../Banner/Banner";
import { useEffect, useState } from 'react';
import TopSellingFood from "../TopSellingFood/TopSellingFood";
import ReviewSection from "../ReviewSection/ReviewSection";
import OurServices from "../OurServices/OurServices";
import { Link } from "react-router-dom";





const Home = () => {
    const [topSellingFood, setTopSellingFood] = useState([]);
    useEffect(() => {
       
        fetch('https://restuarent-management-server.vercel.app/top-selling-food')
          .then(response => response.json())
          .then(data => setTopSellingFood(data))
          .catch(error => console.error('Error fetching top-selling food:', error));
      }, []);


    return (
   <div>
     <Banner></Banner>

    <div>
    <h1 className="text-2xl font-bold italic lg:text-4xl text-center text-red-500  ">Top Selling Foods</h1>
   
   <div className="container mx-auto text-white shadow-2xl mt-10 py-10 px-5 drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-3">
    {topSellingFood.map(food => (
        
        <TopSellingFood key={food._id} food={food}></TopSellingFood>
 
       ))}
    </div>
    <div className="flex justify-center">
        <Link to='/allFood'><button className="btn bg-red-500 text-white" >See All</button></Link>
    </div>
    </div>
   <OurServices></OurServices>
   <ReviewSection></ReviewSection>
  </div>
    

  
    );
};

export default Home;