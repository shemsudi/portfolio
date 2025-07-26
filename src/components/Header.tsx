import React from "react";

const Header: React.FC = () => {
  return (
    <header className="shadow-sm z-10 bg-neutral-100 p-4 fixed top-0 w-full">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
