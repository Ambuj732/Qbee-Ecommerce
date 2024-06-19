import React from "react";
import "./ProductCard";
import ProductCard from "./ProductCard";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const ProductPage = () => {
  return (
    <div className="w-screen h-screen">
      <Navigation />
      <div className="text-sm text-gray-500 flex gap-2 mt-8 ml-6">
        <span>Home /</span>
        <span>Summer /</span>
        <span>Going Out</span>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <span className="text-4xl font-normal font-serif text-[#d6bea3]">
            Women's Swimwear
          </span>
          <span className="font-medium">
            Need a wardrobe refresh for your next holiday? Our stunning range of
            swimsuits and beachwear for women will do the trick.
          </span>
        </div>
        <span className="text-sm underline">Show more</span>
      </div>
      <div className=" mt-4 w-full h-36 bg-[#F8F9FA]">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className=" flex gap-5 mt-7">
            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Colour</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Brown</option>
              <option>Brown</option>
              <option>Brown</option>
              <option>Brown</option>
              <option>Brown</option>
              <option>Brown</option>
            </select>

            <select className="border-[1px] border-black hover:black p-2 px-14 w-60">
              <option>Size</option>
              <option>6</option>
              <option>8</option>
              <option>10 </option>
              <option>12</option>
              <option>14</option>
              <option>18</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
            </select>

            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Fit</option>
              {/* Add other fit options here */}
            </select>

            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Occasion</option>
              {/* Add other occasion options here */}
            </select>
          </div>
          <div className=" flex gap-5">
            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Product Type</option>
              {/* Add other product type options here */}
            </select>

            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Style</option>
              {/* Add other style options here */}
            </select>

            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Neckline</option>
              {/* Add other neckline options here */}
            </select>

            <select className="border-[1px] border-black  p-2 px-14 w-60">
              <option>Price</option>
              {/* Add other price options here */}
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center space-x-2 gap-4">
          <div className="grid grid-cols-3 gap-1">
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
            <div className="w-2 h-2 bg-black"></div>
          </div>
          <div className="grid grid-cols-6 gap-1">
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400"></div>
          </div>
        </div>
        <div className="text-black">
          Showing 1 - 52 of <span className="font-semibold">52</span> Styles
        </div>
        <div className="flex items-center space-x-4">
          <div>
            Products per page:
            <select className="border-[1px] border-black  p-1 ml-2">
              <option>60</option>
            </select>
          </div>
          <div>
            Sort By:
            <select className="border-[1px] border-black  p-1 ml-2">
              <option>Recommended</option>
              <option>Price:Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
