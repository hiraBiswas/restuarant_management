import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen container mx-auto flex flex-col items-center">
           <div className="">
            <img className="" src=" https://i.ibb.co/tMkynkx/404-error-page-not-found-design-template-vector-21393147-removebg-preview.png" alt="" />
           </div>
           <div className="">
           <Link to="/"> <button className="btn bg-red-600">Back to Home</button></Link>
           </div>
        </div>
    );
};

export default ErrorPage;