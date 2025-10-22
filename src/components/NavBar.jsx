import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { Moon, Search, Sun } from "lucide-react";
import ThemeContext from "@/Context/ThemeContext";

const NavBar = () => {

const {theme,toggleTheme} = useContext(ThemeContext)

  return (
    <nav className="flex max-w-7lx mx-auto justify-between bg-gray-600/80 text-white p-2 w-full ">
      <div className="flex grid-cols-1 sm:gap-15 lg:gap-10 max-w-7lx mx-auto justify-between space-x-3">
        <div className="flex items-center gap-2">
          <img src="logo.jpg" alt="Logo" className="w-12 h-12 rounded-full" />
          <h1>I.W.D</h1>
        </div>
        <ul className="hidden lg:flex gap-8 p-4">
          <li className="hover:scale-110 transition-transform duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link to="/About">About</Link>
          </li>
          <li className="hover:scale-110 transition-transform duration-300">
            <Link to="/Products">Products</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input placeholder="Search..." className="p-1 border" />
            <Search className="bg-violet-200 border w-10 h-8.5" />
          </div>
          <button className="hedden lg:block" onClick={toggleTheme}>
            {
              theme =="dark"? <Sun/> : <Moon/>
            }
          </button>
          <Link to="/Cart">
            <FaCartShopping size={25} className="flex justify-items-end " />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
