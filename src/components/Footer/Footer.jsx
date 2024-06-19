import React from "react";
import insta from "../../assets/Home/insta.svg";
import fb from "../../assets/Home/fb.svg";
import tt from "../../assets/Home/tt.svg";
import yt from "../../assets/Home/yt.svg";
import twitter from "../../assets/Home/twitter.svg";
import img10 from "../../assets/Home/img10.webp";
import img11 from "../../assets/Home/img11.webp";

const Footer = () => {
  return (
    <footer className="bg-[#F7EDE4] p-10 mt-10 flex w-full h-[500px] ">
      <div className=" w-1/2 mx-auto flex gap-28">
        <div>
          <h3 className="font-bold text-lg mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Delivery and Collection
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Store Finder
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Size Guide
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                T & Cs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Our Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Modern Slavery Statement
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Privacy + Cookies
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                UNIDAYS 15%
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                QVIP Delivery Pass
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Klarna
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                True Fit
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-800 hover:underline">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 mx-auto  flex flex-col gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">
            Sign up to our newsletter & get 15% off your first order
          </h3>
          <form className="space-y-2">
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your e-mail address"
              required
            />
            <div className="text-red-600 text-sm">This field is required.</div>
            <button
              type="submit"
              className="w-full flex justify-center items-center p-2 bg-black text-white rounded"
            >
              <span>Sign Up</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>
          </form>
          <p className="text-gray-600 text-sm mt-2">
            * New subscribers only. Discount excludes sale.
          </p>
        </div>
        <div className=" flex gap-10">
          <div>
            <h4 className="font-bold text-lg text-nowrap">Download the App</h4>
            <div className="flex gap-4 mt-2">
              <a href="#">
                <img
                  src={img10}
                  alt="Download on the App Store"
                  className="w-32 h-10"
                />
              </a>
              <a href="#">
                <img
                  src={img11}
                  alt="Get it on Google Play"
                  className="w-32 h-10"
                />
              </a>
            </div>
          </div>
          <div className=" flex flex-col">
            <h4 className="font-bold text-lg">Follow Us</h4>
            <div className="flex gap-4 ">
              <a href="#" className="">
                <img src={insta} alt="insta" />
              </a>
              <a href="#" className="">
                <img src={fb} alt="insta" />
              </a>
              <a href="#" className="">
                <img src={tt} alt="insta" />
              </a>
              <a href="#" className="text-gray-800">
                <img src={yt} alt="insta" />
              </a>
              <a href="#" className="">
                <img src={twitter} alt="insta" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
