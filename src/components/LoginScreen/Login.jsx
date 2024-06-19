import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const Login = () => {
  return (
    <div className="w-screen h-screen">
      <Navigation />

      <div className=" w-screen flex justify-center  mt-10 gap-10">
        <div className="">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold font-serif ">Login</h2>
            <p>Use the form below to login to your account</p>
          </div>
          <form className="mt-4">
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
            <div className=" ">
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
            </div>
            <div className="flex mt-4 mb-9 items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm cursor-pointer">
                <a href="#" className="font-medium text-black">
                  Forgotten Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="  cursor-pointer w-[570px] p-4  text-white bg-black hover:bg-gray-800"
              >
                Log In to your Account
              </button>
            </div>
          </form>
        </div>
        <div className="">
          <div className=" flex flex-col gap-5">
            <h1 className="text-2xl font-bold font-serif">Create an Account</h1>
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

export default Login;
