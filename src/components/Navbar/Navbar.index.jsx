import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="Navbar">
    <nav className="flex justify-around">
      <p className="text-lime-400 font-bold">AGENCE PROJECT</p>

      <ul className="flex w-[70%] justify-around">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="works">Works</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
