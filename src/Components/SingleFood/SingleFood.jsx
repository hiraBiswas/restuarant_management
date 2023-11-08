import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";


const SingleFood = () => {
    const { user, signIn, loading } = useContext(AuthContext);
    const foodDetails = useLoaderData();
    console.log(foodDetails)
    const {name, rating, price, brandName, description, image, type}=productDetails
    return (
        <div>
            
        </div>
    );
};

export default SingleFood;