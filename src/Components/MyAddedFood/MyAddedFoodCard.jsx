import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAddedFoodCard = ({data}) => {
    const {name, image, category, price,description, quantity,_id} = data;
    const [isModalOpen, setIsModalOpen] = useState(false);

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
    
        const updateFood = { name, image, price, origin, category, quantity, description };
    
        console.log(updateFood);
    
        fetch(`https://restuarent-management-server.vercel.app/food/${_id}`, {
          method: 'PATCH',
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
        <div className="card card-side bg-base-100 shadow-xl">
        <figure className="w-1/2"><img className="h-full" src={image} alt={name}/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <div className="card-actions justify-end">
      <Link to={`/update/${_id}`}><button className="btn bg-red-600 text-white hover:text-red-600 hover:bg-white">Update</button></Link>
    </div>
        </div>
      </div>
    );
}

export default MyAddedFoodCard; 