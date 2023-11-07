

import { useContext } from "react";
import {Link,  useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { BsGoogle } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const location = useLocation()
  console.log('location in login page', location)
  const navigate=useNavigate() 
 const {signIn, signInWithGoogle}=useContext(AuthContext)


  const handleLogin=e=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)


    signIn(email, password)
    .then(result=>{
      
     navigate(location?.state?location.state: '/')
    })
    .catch(error=>{
      toast.error(error.message);
    })
  }
    return (
     
      <div className="bg-black  shadow-drop">
          <div className="flex container mx-auto justify-center items-center">
          <div className="hidden flex-1 lg:block" >
           <img className="max-h-screen" src="https://i.ibb.co/T0Qv5dL/man-3015061-1280-removebg-preview.png" alt="" />
            </div>


            <div className="flex-1" style={{backgroundImage: 'url(https://i.ibb.co/BPdvzDP/blob-scene-haikei-1.png)', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}} >
             <h2 className="text-2xl font-bold text-white text-center   lg:text-4xl pt-2">Login Here !</h2>
            <form onSubmit={handleLogin} className="py-5" >
                            <div className="form-control px-12 py-1">
                                <label className="label">
                                    <span className="label-text text-white ">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input bg-transparent border-red-600 text-white" />
                            </div>
                            <div className="form-control px-12 py-1">
                                <label className="label">
                                    <span className="label-text  text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input bg-transparent border-red-600 text-white" />
                                 
                                 <p className="text-white py-3">New to the website? <span className="text-red-600"><Link to="/register">Sign Up</Link></span> here.</p>
                            </div>
                            <div className="px-8 py-1">
      <h2>Or</h2>
      <div onClick={signInWithGoogle} className="flex items-center gap-6 justify-center">
      <BsGoogle className="text-xl text-red-600"></BsGoogle>
      <Link className="text-red-600 text-xl">Login with Google</Link>
      </div>
      </div>
                            <div className="form-control mt-2">
                                <input className="btn bg-red-800 mx-12 text-white hover:bg-white hover:text-red-600" type="submit" value="Login" />
                            </div>
                        </form>
            </div>

        </div>
      </div>
       
    );
};

export default Login;