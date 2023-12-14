import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAddedFoodCard from './MyAddedFoodCard';

const MyAddedFood = () => {
    const { user, loading } = useContext(AuthContext);
    const [addedData, setAddedData] = useState([]);
    const loadedData = useLoaderData();
    

    useEffect(() => {
        fetch('https://restuarant-management-server-new.vercel.app/food')
            .then(response => response.json())
            .then(data => {
                const userAddedItems = data.filter(item => item.userEmail === user.email);
                setAddedData(userAddedItems);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);
    return (
        <div className="container mx-auto">
            {addedData.length > 0 ? (
                <div className="shadow-2xl mt-10  drop-shadow rounded-xl grid gap-12 grid-cols-1 lg:grid-cols-2">
                    {addedData.map(data => (
                        <MyAddedFoodCard key={data._id} data={data}></MyAddedFoodCard>
                    ))}
                </div>
            ) : (
                <p className="text-center text-white text-3xl py-20 font-bold mt-8">No data added by you.</p>
            )}
        </div>
    );
};

export default MyAddedFood;