import { useState } from 'react';
import emailjs from 'emailjs-com';
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your emailjs template ID, user ID, and service ID
    const templateParams = {
        to_name: 'Your Destination Name',
        from_name: formData.name,
        form_email: formData.email, // Use formData.email for the email field
        message: formData.message,   // Use formData.message for the message field
      };

    console.log(formData.email);

    // Use your emailjs service ID
    emailjs
      .send(
        'service_s7el5y4', // Replace with your service ID
        'template_9conkst', // Replace with your template ID
        templateParams,
        'xAxl8ywPdY2FJQpFD' // Replace with your user ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <div className='mt-10 container mx-auto '>
        <h3 className='text-2xl font-bold text-red-600 py-5  text-center lg:text-4xl lg:py-6 italic' >Contact Us</h3>
      <div className="bg-black hero-content flex-col  gap-5 lg:flex-row-reverse">
        <div className="">
            <div className='bg-black lg:px-10'>
              <img className='max-h-fit max-w-fit' src="https://i.ibb.co/sFkjk2q/service-img.png" alt="" />
               </div>
            </div>
         <div className='flex flex-col justify-start'>
        <div>
        <h2 className='text-3xl pb-8 font-bold text-white'>Please Get In Touch With Us</h2>
         <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"  
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-red-800 text-white hover:text-red-800">
                  Contact
                </button>
              </div>
            </form>
            <div>
          
            </div>
          </div>
        </div>
         </div>
        </div>
      </div>
    
  );
};

export default Contact;
