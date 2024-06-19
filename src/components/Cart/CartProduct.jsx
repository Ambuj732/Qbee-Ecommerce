import React from "react";
import logo from "../../assets/Home/logo.png";
import img9 from "../../assets/Product/img9.jpeg";
import heart from "../../assets/Product/heart.svg";
import amex from "../../assets/Home/amex.png";
import apple from "../../assets/Home/apple.png";
import klarna from "../../assets/Home/klarna.png";
import mastercard from "../../assets/Home/mastercard.png";
import visa from "../../assets/Home/visa.png";
import paypal from "../../assets/Home/paypal.png";
const CartProduct = () => {
  return (
    <div className="w-screen ">
      <div className=" flex justify-center items-center mt-12">
        <img src={logo} className="w-[134px] " />
      </div>
      <div className=" w-screen h-screen bg-[rgb(248,249,250)] mt-10 flex justify-center gap-10">
        <div className=" bg-white shadow-lg w-3/5 mt-36 ml-20 h-[400px]">
          <h1 className="text-lg font-bold font-custom mt-5 mx-5">
            Bag (1 item)
          </h1>
          <hr className=" border-black mx-5"></hr>
          <div className="flex justify-center items-center gap-16 ">
            <img src={img9} className="object-contain overflow-hidden p-2" />
            <div className=" bg-white w-3/4 shadow-md p-2 ">
              <h2 className="text-xl font-semibold">
                Pink Embellished Bodycon Mini Dress
              </h2>
              <div className=" ">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Quantity:2
                    </label>
                    <div className="flex items-center space-x-2">
                      <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        &minus;
                      </button>
                      <button className="bg-gray-200 text-gray-600 px-2 py-1 rounded">
                        &#43;
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Size:
                    </label>
                    <select
                      className="block w-full border-gray-300 rounded-md shadow-sm"
                      //     value={size}
                    >
                      <option value="6">6</option>
                      <option value="8">8</option>
                      <option value="10">10</option>
                      <option value="12">12</option>
                      <option value="14">14</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Colour:
                    </label>
                    <span className="block text-gray-900">Pink</span>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">
                      Item Price:
                    </label>
                    <span className="block text-gray-900">£34.99</span>
                  </div>
                </div>
                <hr className="mt-10"></hr>
                <div className="flex mt-10 justify-between items-center">
                  <div className=" flex gap-5">
                    <div className=" flex justify-center items-center border-[1px] border-black px-10 py-1">
                      <img src={heart} className="w-7 h-7" />
                      <span>Move to WishList</span>
                    </div>
                    <div className=" flex justify-center items-center gap-2 border-[1px] border-black px-2 py-1">
                      <img src={heart} className="w-7 h-7" />
                      <span>Remove</span>
                    </div>
                  </div>
                  <span className="block font-bold text-gray-900">£34.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-2/5">
          <div className=" bg-white shadow-lg w-9/12 mt-36 h-[450px]">
            <div className="flex justify-between mx-4 mt-4">
              <span className="text-2xl font-bold font-custom">
                Order summary
              </span>
              <a href="#" className="underline text-sm font-normal">
                Continue Shoping
              </a>
            </div>
            <hr className="mx-4 border-black mt-4"></hr>
            <div className="flex justify-between items-center m-4">
              <span className="text-gray-500 font-semibold "> sub Total</span>
              <span className="font-bold">£104.97</span>
            </div>
            <hr className="mx-4"></hr>
            <div className="flex justify-between items-center m-6">
              <span className="text-gray-500 font-semibold "> Delivery</span>
              <div className="flex flex-col justify-center items-end ">
                <span className="font-bold ">£3.99.</span>
                <span className="text-sm">
                  (More options available at checkout)
                </span>
              </div>
            </div>
            <hr className="mx-4"></hr>
            <div className="flex justify-between items-center mt-4 mx-6">
              <span className="text-2xl font-bold font-custom">
                Order Total
              </span>
              <span className=" text-xl font-bold">£104.97</span>
            </div>
            <hr className="m-4"></hr>
            <div className="flex mx-4">
              <input
                type="text"
                placeholder="Add discount/promo code"
                className="border-[1px] w-9/12 h-14 hover:border-black px-4"
              />
              <div className="w-28 h-14 bg-black flex justify-center items-center">
                <span className="text-white">Apply</span>
              </div>
            </div>
            <div className="w-11/12 h-14 mt-7 mx-4 bg-black flex justify-center items-center">
              <span className="text-white">Continue to checkout</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
