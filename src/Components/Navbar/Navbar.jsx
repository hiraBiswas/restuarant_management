
import {  Link, NavLink } from "react-router-dom";
import './navbar.css';
import { useContext, useState,useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const links =<>
    <li className="text-lg lg:text-xl  font-semibold text-white lg:px-3"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold text-white lg:px-3 "><NavLink to="/allFood">All Food</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold text-white lg:px-3"><NavLink to="/blog">Blog</NavLink></li>
    <li className="text-lg lg:text-xl font-semibold text-white lg:px-3"><NavLink to="/addAFood">Add Food</NavLink></li>
    
    </>

const profileLinks =<>
<li className="text-sm lg:text-sm font-medium text-black "><NavLink to="/myAddedFood">My Added Food Items</NavLink></li>
<li className="text-sm lg:text-sm font-medium text-black "><NavLink to="/addAFood">Add a Food Item</NavLink></li>
<li className="text-sm lg:text-sm font-medium text-black"><NavLink to="/myOrder">My ordered food items</NavLink></li>

</>

    


const {user,loading, logOut}= useContext(AuthContext)
const handleSignOut=()=>{
     logOut()
     .then(result=>{
      console.log(result.user)
     })

     .then(error=>{
      console.error(error)
     })
}
    return (
        <div>
           <div className="navbar bg-black">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu-sm menu bg-black text-white dropdown-content mt-3 p-2 shadow z-40  rounded-box w-52 ">
       {links}
      </ul>
    </div>
    <div className="flex items-center">
        <img className="h-20 w-20 hidden lg:block" src="https://i.ibb.co/JKyzwrz/Tastey-removebg-preview.png" alt="" />
    
    </div>
  </div>
  <div className="navbar-center hidden  lg:flex">
    <ul className="menu-horizontal ">
      {links}
    </ul>
  </div>
  <div className="navbar-end ">
  {user ? (
            <div className="flex items-center">
             <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="hover:underline"> <img
                src={user.photoURL} 
                alt="Profile"
                className="h-10 w-10 rounded-full mr-2"
              /></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu -ml-20 p-2 shadow bg-base-100 rounded-box w-52">
 {profileLinks}
  </ul>
</div>
             
              <span className="text-lg font-semibold hidden text-white lg:block">{user.displayName}</span>
              <Link>
                <button onClick={handleSignOut} className="btn btn-outline border-red-400 text-white ml-3">
                  Sign Out
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-outline border-red-400 text-white">Login</button>
            </Link>
          )}
            
         
</div>
        </div>
        </div>
    );
};

export default Navbar; 