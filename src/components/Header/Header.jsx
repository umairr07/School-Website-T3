import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiX } from "react-icons/hi";
import { MdMenuOpen } from "react-icons/md";

const lists = [
  {
    name: "Home",
    path: "/",
    color: "#E94F3F",
  },
  {
    name: "About",
    path: "/about",
    color: "#FFC105",
  },
  {
    name: "Teachers",
    path: "/teachers",
    color: "#14B7F1",
  },
  {
    name: "Classes",
    path: "/classes",
    color: "#8DC63F",
  },
  {
    name: "Contact",
    path: "/contact",
    color: "#A70B0B",
  },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <>
      <nav className="fixed top-0 p-4 left-0 w-full bg-white text-heading shadow-lg z-50 font-semibold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="flex items-center cursor-pointer">
            <img
              src="https://static.wixstatic.com/media/7c8820_e3ecc2566cfa486fa1274558adb2b0d2~mv2.png"
              alt="Logo"
              className="w-28"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-16">
            {lists.map((item) => {
              return location.pathname === item.path ? (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] text-blue-main transition-all duration-300"
                  style={{ color: item.color }}
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.path}
                  className="cursor-pointer lg:text-[17px] md:text-[15px] hover:text-blue-main transition-all duration-300 "
                  style={{ color: item.color }}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-blue-600 focus:outline-none"
              onClick={() => setMenu(!menu)}
            >
              {!menu ? (
                <MdMenuOpen className="text-3xl mt-2 text-purple-600" />
              ) : (
                <HiX className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed top-0 left-0 h-screen w-full bg-white shadow-xl flex flex-col justify-start items-start py-5 z-50">
          <div className="flex justify-around items-center w-full">
            <Link to={"/"} className="flex items-center cursor-pointer px-8">
              <img
                src="https://static.wixstatic.com/media/7c8820_e3ecc2566cfa486fa1274558adb2b0d2~mv2.png"
                alt="Logo"
                className="w-28"
              />
            </Link>
            <button
              className="ml-auto mr-9 mt-1 text-purple-600 hover:text-red-500"
              onClick={() => setMenu(false)}
            >
              <HiX className="text-2xl text-forText" />
            </button>
          </div>
          <div className="flex flex-col gap-6 ml-5 w-full text-blue-600 mt-10">
            {lists.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                onClick={() => setMenu(false)}
                className="pb-2 border-b border-gray-300 w-96 px-4"
                style={{ color: item.color }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
