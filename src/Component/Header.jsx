import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = ({ name }) => {
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
  ];

  return (
    <header className="flex justify-between items-center px-10 py-5 bg-black/90 text-white shadow-md border-b border-gray-800 fixed w-full top-0 left-0 z-50">
      {/* === LOGO === */}
      <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-green-600 text-transparent bg-clip-text">
        {name}
      </h1>

      {/* === NAVIGATION === */}
      <nav>
        <ul className="flex space-x-10 text-lg font-medium items-center justify-center">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name} className="relative group">
                <Link
                  to={item.path}
                  className={`transition duration-300 ${
                    isActive
                      ? "text-green-400"
                      : "text-white hover:text-green-400"
                  }`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] bg-green-400 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
