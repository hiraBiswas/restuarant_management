import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';



const OrderForm = () => {
    const { user, signIn, loading } = useContext(AuthContext);
    console.log(user)
    const foodDetails = useLoaderData();
 
    const { _id,image, name, quantity,userName,origin, price,userEmail  } = foodDetails;
    console.log('quantity from food', quantity)
    const [selectedDate, setSelectedDate] = useState(null);
    const today = new Date();
    const minimumDate = addDays(today, 0);
   

    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const orderQuantity = parseInt(form.orderQuantity.value, 10);
        const price = form.price.value;
        const date = form.date.value;
        const buyerName = form.buyerName.value;
        const buyerEmail = form.buyerEmail.value;
        const food_id=foodDetails._id;
        const foodQuantity = parseInt(quantity, 10); 

        console.log('enterd quantity',orderQuantity)
        console.log('food quantity', foodQuantity)

        if (userEmail === user.email) {
            toast.error("You can't add your own food items");
            return;
          }

     if(foodQuantity===0){
        toast.error('Food is not available')
     }
     else if (orderQuantity > foodQuantity) {
    console.log('orderQuantity is large');
    toast.error('Quantity is not available');
    return;
  } else {
    console.log('quantity is larger');
    const newOrder = { name,image, buyerName, buyerEmail, price,date,userName,orderQuantity,food_id };
    console.log(newOrder);

    fetch('https://restuarant-management-server-new.vercel.app/order', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify(newOrder),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    if (data._id || data.insertedId) {
      toast.success('Order is successfully placed');
      form.reset();
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    toast.error('Failed to add food');
  });
  }

       
  };

    

    return (
        <div>
            <div className="bg-gray-800 p-12">
                <h2 className="text-3xl font-extrabold text-center py-5 text-white">Order Food</h2>
                <form onSubmit={handleOrder} className="bg-black px-10 max-w-3xl mx-auto shadow-2xl rounded-3xl">
                    <div className="md:flex gap-8 px-5">
                        <div className="form-control  md:w-1/2 pt-8">
                            <label className="label">
                                <span className="label-text text-white">Food Name</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={name} type="text" name="name" placeholder="food name" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 lg:pt-8">
                            <label className="label">
                                <span className="label-text text-white">Quantity</span>
                            </label>
                            <label className="input-group">
                                <input required type="number" name="orderQuantity" placeholder="quantity" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                            </label>
                        </div>
                    </div>


                    <div className="md:flex px-5 gap-8 mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <label className="input-group">
                                <input defaultValue={price} type="number" name="price" placeholder="price" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-white">Buying Date</span>
                            </label>
                            <label className="input-group">
                                <DatePicker
                                    required
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    name="date"
                                    placeholderText="Select a date"
                                    minDate={minimumDate}
                                    className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs"
                                />
                            </label>
                        </div>
                    </div>

                    <div className="md:flex gap-8 px-5 mb-2">
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-white">Buyer Name</span>
                            </label>
                            <label className="input-group">
                                <input readOnly defaultValue={user.displayName} type="text" name="buyerName" placeholder="buyer name" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text text-white">Buyer Email</span>
                            </label>
                            <label className="input-group">
                                <input readOnly defaultValue={user.email} type="text" name="buyerEmail" placeholder="buyer email" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
                            </label>
                        </div>
                    </div>


                    <div className="flex justify-center">
                        <input type="submit" value="Purchase" className="btn w-3/4 bg-red-700 text-white my-4 hover:text-red-700 hover:bg-white" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default OrderForm;