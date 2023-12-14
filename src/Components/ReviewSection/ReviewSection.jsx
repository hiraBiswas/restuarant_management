

const ReviewSection = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-center italic text-red-500 text-2xl mt-10 font-bold lg:text-4xl my-8 lg:my-12 ">Your Feedback, Our Inspiration</h1>
            <div className="hero h-full lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/86GrVxz/alex-haney-CAhj-Zm-Vk5-H4-unsplash-scaled.jpg) '}}>
  <div className="hero-overlay bg-black bg-opacity-80"></div>
  <div className="flex flex-col ">
  <div className="ml-10  text-start text-white">
    <div className="container text-center max-w-xl mx-auto">
      <h1 className="mb-5 text-2xl my-5 font-bold lg:text-4xl"><span className="text-red-600">TasteyFood -</span><br />A Symphony of Tastes</h1>
      <p className="mb-5">Embark on a gastronomic journey with our "Culinary Chronicles" review section, where every dish tells a unique tale of flavor. Join us in celebrating the symphony of tastes that grace our tables, as we delve into the world of epicurean delights that leave a lasting impression on both the palate and the soul.</p>
      <button className="btn bg-red-600 text-white">Explore More</button>
    </div>
  </div>

  <div className="grid gap-8 mt-8 grid-cols-2 mx-3 md:grid-cols-2  lg:grid-cols-4">
    <div className=" border-red-600 border-[1px] drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-32 w-32 rounded-full py-3" src="https://i.ibb.co/6y1GzrM/images-4.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center"> From the first bite to the last, every element is orchestrated to perfection, creating a gastronomic symphony that leaves a lasting impression.</p>
        <p className="text-end text-red-500 ">-Robert</p>

    </div>

    <div className=" border-red-600 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-32 w-32 rounded-full py-3" src="https://i.ibb.co/61y7jC6/collarbone-cut-with-soft-waves-1.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center"> From the first bite to the last, every element is orchestrated to perfection, creating a gastronomic symphony that leaves a lasting impression.</p>
        <p className="text-end text-red-500 ">-Janhabi</p>

    </div>

    <div className=" border-red-600 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-32 w-32 rounded-full py-3" src="https://i.ibb.co/Br11Vkz/download-4.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center"> From the first bite to the last, every element is orchestrated to perfection, creating a gastronomic symphony that leaves a lasting impression.</p>
        <p className="text-end text-red-500 ">-Robert</p>

    </div>

    <div className=" border-red-600 border-[1px]  drop-shadow p-3">
        <div className="flex justify-center">
        <img className="h-32 w-32 rounded-full py-3" src="https://i.ibb.co/WzvZcbC/images-3.jpg" alt="" />
        </div>
        <p className="text-gray-300 text-center"> From the first bite to the last, every element is orchestrated to perfection, creating a gastronomic symphony that leaves a lasting impression.</p>
        <p className="text-end text-red-500 ">-Nobita</p>

    </div>
  </div>
  
</div>
  </div> 
</div>


       
    );
};

export default ReviewSection;