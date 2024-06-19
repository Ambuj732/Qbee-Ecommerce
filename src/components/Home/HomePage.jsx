import React from "react";
import carousel from "../../assets/Home/carousel.jpg";
import img1 from "../../assets/Home/img1.jpg";
import img2 from "../../assets/Home/img2.jpg";
import img3 from "../../assets/Home/img3.jpg";
import img4 from "../../assets/Home/img4.jpg";
import img5 from "../../assets/Home/img5.jpg";
import img6 from "../../assets/Home/img6.jpg";
import img7 from "../../assets/Home/img7.jpg";
import img8 from "../../assets/Home/img8.jpg";
import img9 from "../../assets/Home/img9.jpg";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div className="w-screen h-screen">
      <Navigation />

      <div className="mt-5">
        <img src={carousel} />
      </div>
      <div className="flex justify-center items-center gap-7 ">
        <div className="   w-[270px] h-[290px] mt-7 outline-none">
          <img className="object-contain object-top" src={img1} />
          <span>Shop Dresses</span>
        </div>
        <div className="   w-[270px] h-[290px] mt-7 outline-none">
          <img className="object-contain object-top" src={img2} />
          <span>Shop concert Looks</span>
        </div>
        <div className="  w-[270px] h-[290px] mt-7 outline-none">
          <img className="object-contain object-top" src={img3} />
          <span>Shop Tops</span>
        </div>
        <div className="  w-[270px] h-[290px] mt-7">
          <img className="object-contain object-top" src={img4} />
          <span>Shop Skirts</span>
        </div>
      </div>
      <div className="flex justify-center  items-center m-8">
        <div className="m-5">
          <img src={img5} alt="Summer Accessories" />
          <div className="text-lg font-bold">Shop Holidays</div>
        </div>
        <div className="flex flex-col">
          <div className="m-5">
            <img src={img6} alt="Summer Accessories" />
            <div className="text-lg font-bold">Shop Summer Accessories</div>
          </div>
          <div className="m-5">
            <img src={img7} alt="Summer Accessories" />
            <div className="text-lg font-bold">Shop Shoes</div>
          </div>
        </div>
      </div>
      <div>
        <img src={img8} />
      </div>
      <div className="mt-7">
        <img src={img9} />
      </div>
      <div className="flex flex-col items-center justify-center bg-white h-60">
        <h1 className="text-xl font-semibold text-gray-700">
          Share your style
        </h1>
        <h2 className="text-4xl font-serif text-[#d6bea3]">@QUIZCLOTHING</h2>
        <a
          href="#view-gallery"
          className="text-md text-gray-700 mt-4 underline"
        >
          View Gallery
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
