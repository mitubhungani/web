import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { auth, Logout } from "../Firebase";

const ModernNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = useSelector((store) => store.users);
  const user =JSON.parse(localStorage.getItem('user'));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout=() => {
    Logout()
    localStorage.removeItem('user');
  }

  useEffect(()=>{
    const currntUser = auth.currentUser;
    console.log(currntUser);
    
  },[])

  return (
    <div>
      <nav className="bg-gray-800 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Brand</div>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/additem"
              className="text-white text-lg hover:text-yellow-500 transition duration-300"
            >
              Add Items
            </Link>

            {data.isLogin ||user ? (
              <button
                className="text-white text-lg hover:text-yellow-500 transition duration-300"
                onClick={logout}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="text-white text-lg hover:text-yellow-500 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-gray-700 rounded-lg">
            <Link
              to="/"
              className="block text-white py-2 px-6 hover:bg-gray-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/additem"
              className="block text-white py-2 px-6 hover:bg-gray-600 transition duration-300"
            >
              Add Items
            </Link>
            <Link
              to="/login"
              className="block text-white py-2 px-6 hover:bg-gray-600 transition duration-300"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default ModernNavbar;
