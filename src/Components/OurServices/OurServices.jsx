import { CiDeliveryTruck } from 'react-icons/ci';
import { BiTimeFive } from 'react-icons/bi';
import { MdLocalOffer,MdPayment } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';


const OurServices = () => {
    return (
       
            <div className="container mx-auto">
                <h1 className="text-center italic text-red-500 text-2xl mt-10 font-bold lg:text-4xl lg:my-12 ">Our Services</h1>
                <div className="hero h-full lg:h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/1dkhsWn/pexels-nataliya-vaitkevich-5792329.jpg) '}}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className='flex flex-col justify-center items-center lg:flex-row'>

        <div className='text-white font-medium flex-1 m-5'>
            <div>
                <h1 className='text-2xl fond-bold py-3 lg:text-3xl '>Additional Services</h1>
            </div>
          <div className='flex gap-3 items-center'>
          <BsCheck2Circle className='text-xl font-bold text-red-500'></BsCheck2Circle>  
          <h1>We also provide 100% Vegan food</h1>
          </div>
          <div className='flex  gap-3 items-center'>
          <BsCheck2Circle className='text-xl font-bold text-red-500'></BsCheck2Circle>  
          <h1>We take offer for any family or other function</h1>
          </div>
          <div className='flex gap-3 items-center'>
          <BsCheck2Circle className='text-xl font-bold text-red-500'></BsCheck2Circle>  
          <h1>We offer a lot of option to select</h1>
          </div>
          <div className='flex gap-3 items-center'>
          <BsCheck2Circle className='text-xl font-bold text-red-500'></BsCheck2Circle>  
          <h1>We provide variety of country's cuisine</h1>
          </div>
          <div className='flex gap-3 items-center'>
          <BsCheck2Circle className='text-xl font-bold text-red-500'></BsCheck2Circle>  
          <h1>Provide special discount and we are always on time.</h1>
          </div>
         
        </div>



        <div className='grid flex-1 gap-5 grid-cols-1 md:grid-cols-2'>
            <div className=" bg-black text-center p-4">
           <div className='flex items-center justify-center'>
           < CiDeliveryTruck className='text-red-600 text-6xl text-center'></CiDeliveryTruck>
           </div>
           <h1 className='text-lg lg:text-xl text-white font-medium p-5 pb-2'>Home Delivery</h1>
              <p className='text-gray-200'>We provide home delivery option as well as as dine in.And it will take only 30 min.</p> 
            </div>

            <div className="h-42 w-42 bg-black text-center p-4">
           <div className='flex items-center justify-center'>
           < BiTimeFive className='text-red-600 text-6xl text-center'></BiTimeFive>
           </div>
           <h1 className='text-lg lg:text-xl text-white font-medium p-5 pb-2'>Timely Delivery</h1>
              <p className='text-gray-200'>We take 30 min to deliver. For more than that, we will give you free food.</p> 
            </div>

            <div className="h-42 w-42 bg-black text-center p-4">
           <div className='flex items-center justify-center'>
           < MdLocalOffer className='text-red-600 text-6xl text-center'></MdLocalOffer>
           </div>
           <h1 className='text-lg lg:text-xl text-white font-medium p-5 pb-2'>Timely Delivery</h1>
              <p className='text-gray-200'>We give weekend offer and also cash back offer on a certain amount of purchase.</p> 
            </div>

            <div className="h-42 w-42 bg-black text-center p-4">
           <div className='flex items-center justify-center'>
           < MdPayment className='text-red-600 text-6xl text-center'></MdPayment>
           </div>
           <h1 className='text-lg lg:text-xl text-white font-medium p-5 pb-2'>Timely Delivery</h1>
              <p className='text-gray-200'>We take 30 min to deliver. For more than that, we will give you free food.</p> 
            </div>
        </div>
      </div>
    </div>
    </div>
    
           
    );
};

export default OurServices;