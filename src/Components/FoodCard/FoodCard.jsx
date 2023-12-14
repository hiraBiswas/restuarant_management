import { Link } from "react-router-dom";


const FoodCard = ({food}) => {
    const {name, image, category, price, quantity,_id} = food;
    console.log(name, image, category, price, quantity)
    return (
        <div>
        <div className="card card-compact bg-black drop-shadow border shadow-xl">
<figure className="h-[220px] w-full"><img className="h-[220px] w-full" src={image}/></figure>
<div className="card-body text-white">
  <h2 className="card-title lg:text-xl">{name}</h2>
 <h4 className="text-start font-medium"> Category : {category}</h4>
 <h4 className="text-start font-medium">Quantity : {quantity} </h4>
 <h4 className="text-start  font-medium">Price : {price} </h4>

  <div className=" ">
    <Link to={`/food/${_id}`}><button className="btn text-white btn-outline btn-block  bg-red-600">Details</button></Link>
  </div>
  
</div>
</div>
      </div>
       
    );
};

export default FoodCard;