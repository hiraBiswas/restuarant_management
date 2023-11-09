import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../Providers/AuthProvider';


const UpdateFood = () => {
    const {user, loading, signIn}= useContext(AuthContext)
    const foodData = useLoaderData();
    console.log(foodData);
    const { id } = useParams();
    const { _id, name, category, quantity, origin, price, image, description } = foodData;


    const handleUpdateFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const price = form.price.value;
        const origin = form.origin.value;
        const description = form.description.value;
        const userEmail= user.email;
        const userName= user.displayName;
    
        const updateFood = {userEmail, userName, name, image, price, origin, category, quantity, description };
    
        console.log(updateFood);
    
        fetch(`http://localhost:5200/food/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateFood),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              toast.success('Food info updated Successfully');
            }
          });
        }
    return (
        <div>
              <div className=" bg-gray-900">
  
  <h2 className="text-3xl font-extrabold text-center py-5 text-white">Update Food Info</h2>
  <form onSubmit={handleUpdateFood}  className="bg-black px-10 max-w-3xl mx-auto shadow-2xl rounded-3xl">
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
          <input defaultValue={quantity} type="number" name="quantity" placeholder="quantity" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
        </label>
      </div>
    </div>

    <div className="md:flex gap-8 px-5 mb-2">
      <div className="form-control  md:w-1/2">
        <label className="label">
          <span className="label-text text-white">Food Category</span>
        </label>
        <label className="input-group">
        <select defaultValue={category} name="category" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xl">
            <option value="" disabled>Pick the food category.</option>
            <option value="Rice">Rice</option>
            <option value="Drinks">Drinks</option>
            <option value="Desert">Desert</option>
            <option value="Burger">Burger</option>
            <option value="Pizza">Pizza</option>
            <option value="Fries">Fries</option>
            <option value="Soup">Soup</option>
          </select>
        </label>
      </div>

      <div className="form-control md:w-1/2 ">
        <label className="label">
          <span className="label-text text-white">Image URL</span>
        </label>
        <label className="input-group">
          <input defaultValue={image} type="text" name="image" placeholder="image url" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
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
          <span className="label-text text-white">Food Origin</span>
        </label>
        <label className="input-group">
          <input defaultValue={origin} type="text" name="origin" placeholder="food origin" className="input input-bordered border-red-600 bg-black text-white w-full max-w-xs" />
        </label>
      </div>
    </div>



    <div className="mb-2">
      <div className="form-control w-full px-5">
        <label className="label">
          <span className="label-text text-white">Description</span>
        </label>
        <label className="input-group">
          <textarea defaultValue={description} name="description" className="textarea border-red-600 bg-black text-white w-full max-w-full" placeholder="details"></textarea>
        </label>
      </div>
    </div>

    <div className="flex justify-center my-4 mb-4 items-center">
     <input type="submit" value="Update Food" className="btn   bg-red-700 text-white mb-1 hover:text-red-700 hover:bg-white" />
    
  
    </div>
  </form>

  <ToastContainer />
  
</div>
        </div>
    );
};

export default UpdateFood;