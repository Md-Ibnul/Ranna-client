import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="banner-bg">
        <div className="ms-10 md:ms-24 pt-20 md:pt-40 pb-10 md:pb-16 w-3/4 md:w-2/4">
          <h1 className="text-white text-3xl lg:text-7xl font-bold lg:font-extrabold tracking-wide w-2/3 md:w-full">
            Welcome To <span className="text-red-500">Recipe</span> Community
          </h1>
          <p className="text-white text-lg font-normal mt-8 md:mt-14 tracking-wide">
            We are dedicated to addressing food insecurity for homebound seniors
            and other vulnerable neighbors. We provide food and pantry items to
            those in need, including thousands of nutritious meals prepared in
            our onsite kitchen each week.
          </p>
          <Link
            to="/register"
            className=" btn py-3 px-10 text-white text-lg font-medium bg-red-600 mt-5 md:mt-8 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
