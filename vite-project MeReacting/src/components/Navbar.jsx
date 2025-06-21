import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-500  to-purple-600 h-[15vh] flex items-center px-8 shadow-md">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        🪄 Anjali’s Wizardry
      </h1>
      <ul className="ml-auto flex space-x-6 text-white font-medium">
        <li className="hover:underline cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:underline cursor-pointer"><Link to="/about">About</Link></li>
        <li className="hover:underline cursor-pointer"><Link to="/product">Products</Link></li>
        <li className="hover:underline cursor-pointer"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};
export default Navbar;
