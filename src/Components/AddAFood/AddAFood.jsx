
import { useContext } from 'react';
import {AuthContext} from "../../Providers/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAFood = () => {
    const {user, signIn, Loading} = useContext(AuthContext)
    console.log(user)
    const handleAddFood = (event) => {
      event.preventDefault();
      const form = event.target;
      const image = form.image.value;
      const name = form.name.value;
      const quantity = form.quantity.value;
      const category = form.category.value;
      const price = form.price.value;
      const origin = form.origin.value;
      const addedBy = form.addedBy.value;
      const description = form.description.value;
      const userName = user?.displayName || '';
      const userEmail = user?.email || '';
      const newFood = { name, userName, userEmail, image, price, category,quantity, addedBy, description, origin };
      console.log(newFood);
  
      fetch('http://localhost:5200/food', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newFood),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success('Food added successfully');
            form.reset();
          }
        });
    };
  
    return (
      <div className="bg-gray-800 p-12">
        <h2 className="text-3xl font-extrabold text-center py-5 text-white">Add a Food</h2>
        <form onSubmit={handleAddFood} className="bg-black max-w-4xl mx-auto shadow-2xl rounded-3xl">
          <div className="md:flex">
            <div className="form-control px-5 md:w-1/2 pt-8">
              <label className="label">
                <span className="label-text text-white">Food Name</span>
              </label>
              <label className="input-group">
                <input type="text" name="name" placeholder="food name" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
              </label>
            </div>
            <div className="form-control px-5 md:w-1/2 lg:pt-8">
              <label className="label">
                <span className="label-text text-white">Quantity</span>
              </label>
              <label className="input-group">
                <input type="number" name="quantity" placeholder="quantity" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
              </label>
            </div>
          </div>
  
          <div className="md:flex mb-2">
            <div className="form-control px-5 md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Food Category</span>
              </label>
              <label className="input-group">
                <select name="category" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs">
                  <option disabled defaultValue>Choose a food category.</option>
                  <option>Rice</option>
                  <option>Drinks</option>
                  <option>Desert</option>
                  <option>Burger</option>
                  <option>Pizza</option>
                  <option>Fries</option>
                  <option value="">Soup</option>
                </select>
              </label>
            </div>
  
            <div className="form-control md:w-1/2 px-5">
              <label className="label">
                <span className="label-text text-white">Image URL</span>
              </label>
              <label className="input-group">
                <input type="text" name="image" placeholder="image url" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
              </label>
            </div>
          </div>
  
          <div className="md:flex mb-2">
            <div className="form-control md:w-1/2 px-5">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <label className="input-group">
                <input type="number" name="price" placeholder="price" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
              </label>
            </div>
            <div className="form-control md:w-1/2 px-5">
              <label className="label">
                <span className="label-text text-white">Added by</span>
              </label>
              <label className="input-group">
                <input type="text" name="addedBy" placeholder="added by" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
              </label>
            </div>
          </div>
  
          <div className="mb-2 ">
            <div className="form-control w-full px-5">
              <label className="label">
                <span className="label-text text-white">Food Origin</span>
              </label>
              <label className="input-group">
                <input type="text" name="origin" placeholder="food origin" className="input input-bordered border-red-600 bg-black text-white w-full max-w-full" />
              </label>
            </div>
          </div>
  
          <div className="mb-2">
            <div className="form-control w-full px-5">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <label className="input-group">
                <textarea name="description" className="textarea border-red-600 bg-black text-white w-full max-w-full" placeholder="details"></textarea>
              </label>
            </div>
          </div>
  
          <div className="flex justify-center">
            <input type="submit" value="Add Food" className="btn w-3/4 bg-red-700 text-white my-4 hover:text-red-700 hover:bg-white" />
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  };
  
  export default AddAFood;
  