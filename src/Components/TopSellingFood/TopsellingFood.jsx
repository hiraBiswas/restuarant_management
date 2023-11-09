

const TopSellingFood = ({food}) => {
    const {name, image, category, price} =food;
    console.log(food)
    return (
        <div className="card bg-gray-900 shadow-xl">
        <figure><img src={image} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            {/* <div className="badge px-5 badge-secondary"></div> */}
          </h2>
         <h3>Category : {category}</h3>
         <h3>Price : {price}</h3>
          <div className="card-actions justify-end">
           <button className="btn bg-red-500 btn-block drop-shadow text-white">Details</button>
          </div>
        </div>
      </div>
    );
};

export default TopSellingFood;