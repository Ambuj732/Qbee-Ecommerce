import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
const SignUp = () => {
  return (
    <div className="h-screen">
      <Navigation />
      <div className="flex justify-center mb-16 mt-10 gap-10">
        <div className="">
          <span className="text-2xl font-bold font-serif">Register</span>
          <form>
            <div className="mb-5 mt-5">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                className=" w-[570px] px-2 py-4 mt-1 border border-gray-300 hover:border-black"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                required
                className=" w-[570px] px-2 py-4 mt-1 border border-gray-300 hover:border-black"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                className=" w-[570px] px-2 py-4 mt-1 border border-gray-300 hover:border-black"
              />
              <p className="text-sm text-gray-500">
                We will send a confirmation email to the address to verify your
                account.
              </p>
            </div>
            <div className=" mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                required
                className="w-[570px] px-2 py-4 mt-1 border border-gray-300 hover:border-black"
              />
              <p className="text-sm text-gray-500 ">
                Your password must be a minimum 8 characters in length and
                contain at least a number, 1
                <p>uppercase and 1 lowercase letter.</p>
              </p>
            </div>

            <div className="flex items-center  border border-gray-300 bg-white">
              <select className=" bg-white border-none focus:outline-none">
                <option value="FRA">France</option>
                <option value="USA">USA</option>
              </select>
              <input
                type="text"
                readOnly
                className="w-16 py-4 border-none bg-gray-100"
              />
              <input
                type="tel"
                placeholder="Enter phone number"
                className="flex-1 py-4 border-none focus:ring-0 focus:outline-none"
              />
            </div>

            <div className="flex mt-4 mb-9 gap-4 items-center">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 border-[2px] border-black rounded focus:ring-indigo-500"
                />
              </div>
              <div className="text-medium font-normal cursor-pointer">
                <p>
                  Yes, I'd like to receive exclusive discounts, news and the
                  latest products and style <p>advice</p>
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-7 bg-black w-[570px] py-4">
              <button className="text-white"> Sign up</button>
            </div>
          </form>
        </div>
        <div className="">
          <div className=" flex flex-col gap-5">
            <h1 className="text-2xl font-bold font-serif">
              Log into your Account
            </h1>
            <p>Use the form below to login to your Account</p>
          </div>
          <div className=" w-[570px] cursor-pointer mt-7 border border-gray-500 hover:border-black text-center py-3">
            <span>Log Into you Account</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
