import { FolderKanban, House, MapPin, Menu, ShoppingCart } from "lucide-react";
import { FaFacebook, FaTelegram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-gray-800 w-full h-auto space-x-50 bottom-0 left-0 mt-1">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto space-x-50 ">
        {/* About Us */}
        <div>
          <div className=" text-white p-4 space-y-4">
            <h1 className="text-2xl font-bold">ABOUT US</h1>
            <p>Our Story</p>
            <p>Affiliate Program</p>
            <p>Wholesale Program</p>
            <p>Press inquiries</p>
            <p>Careers</p>
          </div>
        </div>
        {/* Customer Support */}
        <div>
          <div className=" text-white p-4 space-y-4">
            <h1 className="text-2xl font-bold">CUSTOMER SUPPORT</h1>
            <p>Returns & Exchange</p>
            <p>Shipping Information</p>
            <p>Track Your Order</p>
            <p>ProMo Code Lookup</p>
            <p>Gift Card Lookup</p>
          </div>
        </div>
        {/*Contnect With Us */}
        <div>
          <div className=" text-white p-4 space-y-4">
            <h1 className="text-2xl font-bold">CONNECT WITH US</h1>
            <ul className="flex space-x-4">
              <a
                href="https://web.facebook.com/sohengleak"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors duration-200"
              >
                <FaFacebook size={25} />
              </a>
              <a
                href="https://t.me/SOHENG7777"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors duration-200"
              >
                <FaTelegram size={25} />
              </a>
              <a
                href="https://www.youtube.com/@hiemsoheng2026"
                arl="Youtube"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors duration-200"
              >
                <FaYoutube size={25} />
              </a>
              <a
                href="https://www.tiktok.com/@hiem.soheng"
                arl="Tiktok"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors duration-200"
              >
                <FaTiktok size={25} />
              </a>
              <a
                href="https://maps.app.goo.gl/u2qpcFr41EBVxokWA"
                arl="Maps"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-blue-600 transition-colors duration-200"
              >
                <MapPin size={25} />
              </a>
            </ul>
            <div>
              <p>Want $20 Off? Sign up for our Newsletter.</p>
              <p>Sign up for SMS alerts and be the first to khow!</p>
            </div>
            <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="@gmail.com......"
                  className=" border"
                />
                <button
                  type="submit"
                  className="bg-red-600 p-1 rounded"
                >
                  Sign in
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Home, About, Products, Cart */}
      <div className="bottom-0 sm:w-full">
        <ul className="hidden justify-evenly sm:flex md:flex lg:hidden gap-9 p-4 bg-sky-600 text-white w-full">
          <li className="flex flex-col items-center">
            <Link to="/" className="flex flex-col items-center">
              Home
              <House />
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to="/About" className="flex flex-col items-center">
              About
              <Menu />
            </Link>
          </li>
          <li className="flex flex-col items-center">
            <Link to="/Products" className="flex flex-col items-center">
              Products
              <FolderKanban />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
