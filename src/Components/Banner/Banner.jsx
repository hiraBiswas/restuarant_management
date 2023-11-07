

const Banner = () => {
    return (
        <div>
            <div className="carousel h-[400px] w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/kqxHkrN/vegetables-set-left-black-slate.jpg)'}}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content lg:mr-96">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Treat Yourself with <span className="text-6xl italic text-red-600">TasteyTreat</span></h1>
      <p className="mb-5 text-gray-400">It's a delicious promise. At TasteyTreat, we believe that everyone deserves to enjoy life's simple pleasures, starting with their taste buds.</p>
      <button className="btn  bg-red-600 drop-shadow text-white ">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/chRtXh4/pexels-lumn-604969.jpg)'}}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">The Best <span className="italic text-red-600">Tasting</span> Experience</h1>
      <p className="mb-5 text-gray-400">At every bite, our carefully crafted flavors and premium ingredients come together to create a symphony for your taste buds. </p>
      <button className="btn bg-red-600 drop-shadow text-white ">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide3" className="carousel-item relative w-full">
  <div className="hero h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/BrMRq9C/roasted-pork-steak-dark-wooden-surface.jpg)'}}>
  <div className="hero-overlay bg-black bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Feels Like Home <br /> Tastes Like <span className="text-red-600 italic">Paradise </span></h1>
      <p className="mb-5 text-gray-400">When you savor our creations, it's as if you've found a little piece of paradise in every bite, making every meal a truly heartwarming experience.</p>
      <button className="btn  bg-red-600 drop-shadow text-white ">Get Started</button>
    </div>
  </div>
</div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
 
 
</div>
        </div>
    );
};

export default Banner;