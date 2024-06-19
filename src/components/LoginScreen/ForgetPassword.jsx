import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const ForgetPassword = () => {
  return (
    <div className=" h-screen">
      <Navigation />
      <div className="flex justify-center mb-16 mt-10 gap-10">
        <div className="">
          <span className="text-2xl font-normal font-serif">
            Update my Password
          </span>
          <form>
            <div className="">
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
            </div>
            <div className="flex justify-center items-center mt-7 bg-black w-[570px] py-4">
              <button className="text-white"> Submit</button>
            </div>
          </form>
          <div className="cursor-pointer mt-7 border-[1px] text-center border-gray-400 hover:bg-gray-500 hover:border-black w-[570px] py-4">
            <span>Member login</span>
          </div>
        </div>
        <div className="">
          <div className=" flex flex-col gap-5">
            <h1 className="text-4xl font-bold font-serif">Create an Account</h1>
            <p>Create your Q.bee account below</p>
          </div>
          <div className=" w-[570px] cursor-pointer mt-10 border border-gray-500 hover:border-black text-center py-3">
            <span>sign up</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgetPassword;
