import { useContext } from "react";
import {Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth,updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const location = useLocation()
  const navigate=useNavigate()
  const auth = getAuth();
  const {createUser}= useContext(AuthContext)


  const handleRegister=e=>{

    e.preventDefault();
    const form = new FormData(e.target)
    const name = form.get('name')
    const photo = form.get ('photo')
    const email = form.get('email')
    const password = form.get('password')
    
    console.log(name, email, password, photo)

    if (password.length < 6) {
      toast.error('Password should be at least 6 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password should contain at least one capital letter');
      return;
    }
    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      toast.error('Password should contain at least one special character');
      return;
    }
    // creating new user
    createUser(name, photo, email, password)
    .then(result=> {
      console.log(result.user)
      updateProfile(auth.currentUser,{
        displayName: name,
  photoURL: photo
      })
      .then(result=>{
        toast.success('Registration Successful')
        navigate(location?.state?location.state: '/')
       
      })
      .catch(error=>{
        toast.error(error.message)
      })
    
    })
    .catch(error=>{
     console.error( "Registration error:", error.message)
    })
    
  }
  
    return (
        <div className="bg-black py-5 shadow-drop">
        <div className="flex container mx-auto">
          <div className="hidden flex-1 lg:block" >
           <img src="https://i.ibb.co/T0Qv5dL/man-3015061-1280-removebg-preview.png" alt="" />
          </div>


          <div className="flex-1 py-5 " style={{backgroundImage: 'url(https://i.ibb.co/BPdvzDP/blob-scene-haikei-1.png)', backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
           <h2 className="text-2xl font-bold text-white text-center   lg:text-4xl pt-3 ">Register Here !</h2>
          <form onSubmit={handleRegister} className="py-2 " >
          <div className="form-control px-12 ">
                              <label className="label">
                                  <span className="label-text text-white focus:text-white">Name</span>
                              </label>
                              <input type="text" name='name' placeholder="name" className="input bg-transparent text-white border-red-600" />
                          </div>
                          <div className="form-control px-12 ">
                              <label className="label">
                                  <span className="label-text text-white">Email</span>
                              </label>
                              <input type="text" name='email' placeholder="email" className="input text-white bg-transparent border-red-600" />
                          </div>
                          <div className="form-control px-12 ">
                              <label className="label">
                                  <span className="label-text text-white">Photo URL</span>
                              </label>
                              <input type="text" name='photo' placeholder="photo url" className="input text-white bg-transparent border-red-600" />
                          </div>
                          <div className="form-control px-12 ">
                              <label className="label">
                                  <span className="label-text  text-white">Password</span>
                              </label>
                              <input type="password" name='password' placeholder="password" className="input text-white bg-transparent border-red-600 " />
                               
                               <p className="text-white py-2">Already have account? <span className="text-red-600"><Link to="/login">Login</Link></span> here.</p>
                          </div>
                          <div className="form-control mt-4">
                              <input className="btn bg-red-800 mx-12 text-white hover:bg-white hover:text-red-600" type="submit" value="Sign Up" />
                          </div>
                      </form>
          </div>

      </div>
      <ToastContainer />
    </div>
     
  );
};

export default Register;