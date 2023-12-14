import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleFood = () => {
    const { user, signIn, loading } = useContext(AuthContext);
    const foodDetails = useLoaderData();
    console.log(foodDetails)
    const {_id,name,category, price,  description, image, userName, origin}=foodDetails
    return (
        <div className="mt-5 container mx-auto text-white lg:mt-10">
        <div className="p-5   lg:p-12 flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16 ">
         <div className="flex-1">
             <img src={image} alt="" />
         </div>
         <div className="text-start  flex-1">
            
            <h1 className="text-xl py-4 font-semibold lg:text-2xl " ><span > </span> {name}</h1>
             <h3 className="text-lg">Category : {category}</h3>
             <h3 className="text-lg">Price : {price}</h3>
             <h3 className="text-lg">Made By : {userName}</h3>
             <h3 className="text-lg mb-2">Food Origin : {origin}</h3>
             <Link to={`/order/${_id}`} ><button className="btn btn-outline mt-4   border-none drop-shadow bg-red-500 lg:px-16 text-white hover:text-red-600 hover:bg-white" >Order</button></Link>
           
         </div>
        </div>
      
         <h3 className="text-xl text-gray-400 text-start p-5">
        <span className="font-bold text-xl  "> Description:</span> {description}
        </h3>
        <ToastContainer />
        </div>
    );
};

export default SingleFood;