import React from "react";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/Home/logo.png";

import { CgProfile } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
const Navigation = () => {
  return (
    <header className="   inset-0 ">
      <div className="flex  justify-between items-center mt-4 mx-10">
        <div className="flex  cursor-pointer gap-7">
          <span className="font-sans text-2xl">Store Locator</span>
          <div className="h-10">
            <div className="border-[1px] border-gray-200 h-full"></div>
          </div>
          <div className="relative flex items-center">
            <div className="flex items-center justify-center">
              <IoIosSearch />
              <input
                type="text"
                placeholder="Search"
                className="pl-4 border-b-2  focus:outline-none border-black"
              />
            </div>
          </div>
        </div>
        <div className="cursor-pointer mr-56">
          <img src={logo} className="w-[134px] " />
        </div>
        <div className="flex justify-center cursor-pointer gap-10 items-center">
          <div className="flex flex-col items-center">
            <CgProfile />
            <span>Login</span>
          </div>
          <div className="flex flex-col items-center">
            <CiHeart />
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <IoBagOutline />
            <span>Bag</span>
          </div>
        </div>
      </div>
      <div className="flex justify-around items- mx-14 mt-10 ">
        <span className="hover:underline">New In</span>
        <span className="hover:underline">Summer</span>
        <span className="hover:underline">Dresses</span>
        <span className="hover:underline">Clothing</span>
        <span className="hover:underline">Occasionwear</span>
        <span className="hover:underline">Tops</span>
        <span className="hover:underline">Jumpsuits</span>
        <span className="hover:underline">Curve</span>
        <span className="hover:underline">Petite</span>
        <span className="hover:underline">Shoes</span>
        <span className="hover:underline">Assessories</span>
        <span className="hover:underline">Sale</span>
      </div>
      <div className="bg-orange-100 w-full py-3 flex justify-center items-center mt-7">
        <marquee scrollamount="13">
          <span className="text-black">
            Get 15% Off when you download our app - Use Code:{" "}
            <strong>SPRING15</strong>
          </span>
        </marquee>
      </div>
    </header>
  );
};

export default Navigation;
