import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { CiSearch } from "react-icons/ci";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { GoRocket } from "react-icons/go";

function Header() {
  return (
    <header className="bg-white">
      <div className="row1 pt-2 border border-t-0 border-r-0 border-l-0 border-b-gray-300 pb-2 text-gray-500">
        <div className="container flex justify-between items-center">
          <div>
            <span className=" ">
              Get up to 50% off new season styles,limited time only
            </span>
          </div>
          <div className="flex justify-between gap-4">
            <ul className=" flex justify-between gap-4">
              <li>
                <Link to={"/helpCenter"} className="link transition">
                  Help Center
                </Link>
              </li>
              |
              <li>
                <Link to={"/OrderTracking"} className="link transition">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" row2 pt-2 border border-t-0 border-r-0 border-l-0 border-b-gray-300 pb-4">
        <div className="container flex justify-between items-center gap-8">
          <div className="w-[25%]">
            <Link to={"/"}>
              <img
                src="aapplogo.jpg"
                alt="here is the logo"
                className="w-fulll "
              />
            </Link>
          </div>
          <div className="w-[50%] relative">
            <input
              type="text"
              placeholder="Search products here..."
              className="text-gray-600 focus:outline-none  p-1 rounded-[3px] w-full h-[35px] bg-gray-300 pl-2"
            />
            <Button className="absolute! right-[5px] top-[3px] min-w-[37px]! h-[30px] rounded-[50%]! w-[37px]! text-black!">
              <CiSearch className="text-[20px]" />
            </Button>
          </div>

          <div className="w-[25%] flex ">
            <div className="w-full">
              <ul className="flex gap-1 list-none text-[16px] font-medium">
                <Link to={"/login"} className="link  transition">
                  Login
                </Link>
                |
                <Link to={"/login"} className="link transition">
                  Register
                </Link>
              </ul>
            </div>

            <div className=" w-full">
              <ul className="flex justify-between items-center">
                <li className="relative cursor-pointer">
                  <IoIosGitCompare className="logo" />
                  <button className="bg-red-500 rounded-[50%] w-5 h-5 text-[15px] text-white absolute -top-2 -right-3 flex items-center justify-center">
                    2
                  </button>
                </li>
                <li className="relative cursor-pointer">
                  <FaRegHeart className="logo" />
                  <button className="bg-red-500 rounded-[50%] w-5 h-5 text-[15px] text-white absolute -top-2 -right-3 flex items-center justify-center">
                    2
                  </button>
                </li>
                <li className="relative cursor-pointer">
                  <FaCartShopping className="logo" />
                  <button className="bg-red-500 rounded-[50%] w-5 h-5 text-[15px] text-white absolute -top-2 -right-3 flex items-center justify-center">
                    2
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav>
        <div className="container py-3 flex items-center gap-7">
          <div className="col1 w-[20%]">
            <Button className=" gap-2 text-black! w-full">
              <RiMenu2Fill className="text-[20px]" />
              <span>SHOP BY CATEGORIES</span>
              <IoIosArrowDown className="text-gray-500 ml-auto" />
            </Button>
          </div>

          <div className="col2 w-[60%] ">
            <ul className="flex items-center text-black font-medium  ">
              <li>
                <Link to={"/home"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Home</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Fashion"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Fashion</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Electronic"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Electronic</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Bags"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Bags</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Footwear"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Footwear</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Groceries"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Groceries</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Beauty"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Beauty</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Wellness"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Wellness</Button>
                </Link>
              </li>
              <li>
                <Link to={"/Jewellery"} className="link">
                  <Button className="text-black! hover:text-[#ff5252]! transition text-[13px]!">Jewellery</Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col3 w-[20%] flex items-center gap-0.5 link cursor-pointer">
            <GoRocket className="text-[20px]"/>
            Free International Delivery
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
