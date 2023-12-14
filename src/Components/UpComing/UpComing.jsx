import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const UpComing = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className="container mx-auto">
        <h2 className="text-red-500 text-4xl font-bold text-center mt-16 pb-6 italic">Soon To Arrive</h2>
        <Slider {...settings}>
          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/FhSSkYJ/pexels-valeria-boltneva-1200348.jpg" alt="" />
           <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Lemon Ice Tea</h3>
          </div>
          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/j5L4DkN/pexels-toni-cuenca-616836.jpg" alt="" />
           <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Lemonade</h3>
          </div>
          <div>
            <img className="h-80 w-72" src="https://i.ibb.co/kSqvzx3/pexels-valeria-boltneva-1893566.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Pudding with Almond</h3>
          </div>
          <div>
           <img className="h-80 w-72" src="https://i.ibb.co/3vfFw06/pexels-pixabay-60616.jpg" alt="" />
           <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Naga Chicken Fry</h3>
          </div>
          <div>
            <img className="h-80 w-72" src="https://i.ibb.co/Jzkt4HG/pexels-ahmad-nawawi-2714722.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Butter Couch Ice-cream</h3>
          </div>
          <div>
            <img className="h-80 w-72 relative" src="https://i.ibb.co/chSHPLT/pexels-krisztina-papp-2586924.jpg" alt="" />
            <h3 className="absolute text-xl  bottom-5 text-bold text-red-600 font-bold">Extra Chessey Pizza</h3>
          </div>
        </Slider>
      </div>
    );
  }


export default UpComing;