import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataTable from 'react-data-table-component';

const MyOrder = () => {
    const { user, loading } = useContext(AuthContext);
    const [orderData, setOrderData] = useState([]);
    const loadedData = useLoaderData();
    const {name, price, userName, time} = loadedData;
    console.log(loadedData);
    console.log(user)

    useEffect(() => {
        fetch('http://localhost:5200/order')
            .then(response => response.json())
            .then(data => {
                const userOrderItems = data.filter(item => item.buyerEmail === user.email);
                setOrderData(userOrderItems);
            })
            .catch(error => {
                console.error('Error fetching cart data:', error);
            });
    }, []);



    const handleDeleteItem = (itemId) => {
        fetch(`http://localhost:5200/order/${itemId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response) {
                    const remainingData = orderData.filter(dataItem => dataItem._id !== itemId);
                    toast.success('Deleted Successfully')
                    setOrderData(remainingData);
                } else {
                  toast.error('Failed to Delete')
                }
            })
            .catch(error => {
                console.error('Error deleting item:', error);
            });
    };

    const columns = [
        {
            name: 'Food Image',
            selector: row => row.image,
        },
        {
            name: 'Name',
            selector: row => row.name,
        },
        {
            name: 'Price',
            selector: row => row.price,
        },
        {
            name: 'Added Time',
            selector: row => row.date,
        },
        {
            name: 'Food Owner',
            selector: row => row.addedBy,
        },
        {
            name: 'Action',
            selector: row => row.action,
        },
    ];

    
    return (
       <div className='container mx-auto'>
        <h1 className='font-bold text-center py-5 text-white lg:text-2xl'>My Order</h1>
         <DataTable  className='text-center'
        
        columns={columns}
        data={orderData.map(item => ({
            id: item.id,
            image:<img className='h-16 w-16 lg:h-24 lg:w-24' src={item.image} alt={item.name} />,
            name: item.name,
            price: item.price,
            date: item.date,
            addedBy: item.userName,
            action: <button onClick={() => handleDeleteItem(item._id)} className='btn bg-red-500 text-xl text-white'>X</button>
        }))}
       
    />
       </div>
    )}

export default MyOrder;