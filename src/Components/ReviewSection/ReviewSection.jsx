

const ReviewSection = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center italic text-red-500 text-2xl mt-10 font-bold lg:text-4xl lg:my-12 ">Your Feedback, Our Inspiration</h1>
            <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/1dkhsWn/pexels-nataliya-vaitkevich-5792329.jpg) '}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="flex">
  <div className="ml-10 flex-1 text-start text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-2xl font-bold lg:text-4xl"><span className="text-red-600">TasteyFood -</span><br />A Symphony of Tastes</h1>
      <p className="mb-5">Embark on a gastronomic journey with our "Culinary Chronicles" review section, where every dish tells a unique tale of flavor. Join us in celebrating the symphony of tastes that grace our tables, as we delve into the world of epicurean delights that leave a lasting impression on both the palate and the soul.</p>
      <button className="btn bg-red-600 text-white">Explore More</button>
    </div>
  </div>

  <div  className="h-80 flex-1 carousel carousel-vertical rounded-box">
  <div className="carousel-item mx-auto w-1/2 h-full">
  <div className="card bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/0ryrpfy/pasta-spaghetti-with-shrimps-sauce.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-sm">A harmonious blend of textures and flavors, this dish takes you on a culinary journey that engages the senses.</p>
    <p className="text-red-600 text-end">-Hervert</p>
  </div>
</div>
  </div> 
  <div className="carousel-item mx-auto w-1/2 h-full">
  <div className="card bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/ncQL5Qs/pexels-amar-preciado-17593640.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-sm">A harmonious blend of textures and flavors, this dish takes you on a culinary journey that engages the senses.</p>
    <p className="text-red-600 text-end">-Tony</p>
  </div>
</div>
  </div> 
  <div className="carousel-item mx-auto w-1/2 h-full">
  <div className="card bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/M7PykWY/pexels-j-a-n-n-g-u-y-e-n-699953.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-sm">A harmonious blend of textures and flavors, this dish takes you on a culinary journey that engages the senses.</p>
    <p className="text-red-600 text-end">-John</p>
  </div>
</div>
  </div>
  <div className="carousel-item mx-auto w-1/2 h-full">
  <div className="card bg-base-100 shadow-xl">
  <figure><img className="" src="https://i.ibb.co/Zf9xMhj/chicken-skewers-with-slices-sweet-peppers-dill.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <p className="text-sm">A harmonious blend of textures and flavors, this dish takes you on a culinary journey that engages the senses.</p>
    <p className="text-red-600 text-end">-Michel</p>
  </div>
</div>
  </div>
  
</div>
  </div> 
</div>
</div>

       
    );
};

export default ReviewSection;