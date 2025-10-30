import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="grid gap-4 p-20 bg-gray-700 text-white h-auto text-2xl">
      <h1 className="grid text-5xl font-bold text-center pt-20">About</h1>
      <article className="grid text-center gap-4">
        <p>Welcome to I.W.D, your trusted partner in business technology.</p>
        <p>We specialize in delivering powerful systems and</p>
        <p>web solutions that help</p>
        <p>
          organizations streamline operations, enhance efficiency, and achieve
        </p>
        <p>digital success.</p>
        <ul>
          <li className="hover:scale-110 transition-transform duration-300 p-8 ">
            <Link to="/Products" className="border-2 p-2 rounded-xl bg-red-500 ">Buy Now</Link>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default About;
