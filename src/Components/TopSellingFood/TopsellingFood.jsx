import { Link } from "react-router-dom";


const TopSellingFood = ({food}) => {
    const {name, image, category, price,_id} =food;
    console.log(food)
    return (
        <div className="card border shadow-xl">
        <figure className="h-[220px] w-full"><img className="h-[220px] w-full" src={image} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
           
          </h2>
         <h3>Category : {category}</h3>
         <h3>Price : {price} TK</h3>
          <div className="card-actions justify-end">
           <Link to={`/food/${_id}`}><button className="btn bg-red-500 btn-block drop-shadow text-white">Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default TopSellingFood;