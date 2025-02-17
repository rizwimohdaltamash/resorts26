import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../lottie/hero1.json";
import Lottie from "lottie-react";
import "../../css/hero.css";
import "../../css/animate.css";
import NonLoginBg from "../../assets/nonlog2.jpg";

const HeroSection = () => {
  const storedUser = localStorage.getItem("users");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const navigate = useNavigate();

  // bg-[#0a2540]
  return (
    <div className="h-[45vh] lg:h-[55vh] bg-white   text-white flex flex-col">
      {/* For user */}
      {user?.role === "user" && (
        <div className="flex flex-row">
          {/* Huge Text */}
          <div className="flex flex-col mt-10 ml-8">
            <h1 className="w-[70%] px-4 lg:px-0 text-lg lg:text-4xl font-bold text-black flex space-x-2">
              <span className="fade-in-text">WANT</span>
              <span className="fade-in-text">TO</span>
              <span className="fade-in-text">SELL</span>
              <span className="fade-in-text">YOUR</span>
              <span className="fade-in-text text-[#01c141f8] ">RECYCLABLE</span>
              <span className="fade-in-text text-[#01c141f8]">PRODUCTS?</span>
            </h1>

            <p className="mt-7 px-4 lg:px-0 text-sm lg:text-2xl text-gray-700">
              This is a platform being made with the intention of
              <br /> reusing and recycling the products, reducing waste
              <br /> from the environment and making it profitable for
              <br /> the users.
            </p>

            {/* ADD Product Button */}
            <div className="mt-8">
              <button
                onClick={() => navigate("/owner-dashboard")}
                className="px-4 lg:px-8 py-2 lg:py-3 lg:text-lg lg:font-bold bg-[#01c141f8] text-white rounded-lg transition duration-500 transform hover:bg-[#27994df8] hover:scale-105 hover:shadow-lg hover:shadow-[#0ae854f8]/50 shadow-md shadow-[#27994df8]/50 ease-in-out"
              >
                ADD PRODUCT
              </button>
            </div>
          </div>

          {/* Hero Icon */}
          <div className=" w-[35%] ml-20   text-[#00a99d]">
            <Lottie className="w-full" animationData={Hero} />
          </div>
        </div>
      )}

      {/* For scrap dealers */}
      {user?.role === "scrapdealer" && (
        <div className="flex flex-row">
          {/* Huge Text */}
          <div className="flex flex-col mt-10 ml-8">
            <h1 className="w-[70%] px-4 lg:px-0 text-lg lg:text-4xl font-bold text-black flex space-x-2">
              <span className="fade-in-text">WANT</span>
              <span className="fade-in-text">TO</span>
              <span className="fade-in-text">GET</span>
              <span className="fade-in-text text-[#01c141f8] ">RECYCLABLE</span>
              <span className="fade-in-text text-[#01c141f8]">PRODUCTS?</span>
            </h1>
            <p className="mt-7 px-4 lg:px-0 text-sm lg:text-2xl text-gray-700">
              This is a platform being made with the intention of reusing <br />
              and recycling the products, reducing waste from the environment{" "}
              <br /> and making it profitable for the users by selling the
              products <br /> at a high bid.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate("/scrap")}
                className="px-4 lg:px-8 py-2 lg:py-3 lg:text-lg lg:font-bold bg-[#01c141f8] text-white rounded-lg transition duration-500 transform hover:bg-[#27994df8] hover:scale-105 hover:shadow-lg hover:shadow-[#0ae854f8]/50 shadow-md shadow-[#27994df8]/50 ease-in-out"
              >
                Go to Scrap Section
              </button>
            </div>
          </div>

          {/* Hero Icon */}
          <div className=" w-[35%] ml-20   text-[#00a99d]">
            <Lottie className="w-full" animationData={Hero} />
          </div>
        </div>
      )}

      {user?.role === "ngo" && (
        <div className="flex flex-row">
          {/* Huge Text */}
          <div className="flex flex-col mt-10 ml-8">
            <h1 className="w-[70%] px-4 lg:px-0 text-lg lg:text-4xl font-bold text-black flex space-x-2">
              <span className="fade-in-text">WANT</span>
              <span className="fade-in-text">TO</span>
              <span className="fade-in-text">KNOW</span>
              <span className="fade-in-text">MORE</span>
              <span className="fade-in-text">ABOUT</span>
              <span className="fade-in-text text-[#01c141f8] ">OUR</span>
              <span className="fade-in-text text-[#01c141f8]">COMMUNITY?</span>
            </h1>
            <p className="mt-7 px-4 lg:px-0 text-sm lg:text-2xl text-gray-700">
              This platform empowers you to take action and contribute <br /> to
              a cleaner, greener environment. You can help make a <br /> real
              difference in your community by uploading pictures <br /> of areas
              that need cleaning and restoration.
            </p>

            <div className="mt-8">
              <button
                onClick={() => navigate("/message")}
                className="px-4 lg:px-8 py-2 lg:py-3 lg:text-lg lg:font-bold bg-[#01c141f8] text-white rounded-lg transition duration-500 transform hover:bg-[#27994df8] hover:scale-105 hover:shadow-lg hover:shadow-[#0ae854f8]/50 shadow-md shadow-[#27994df8]/50 ease-in-out"
              >
                Go to Community Page
              </button>
            </div>
          </div>

          {/* Hero Icon */}
          <div className=" w-[35%] ml-20   text-[#00a99d]">
            <Lottie className="w-full" animationData={Hero} />
          </div>
        </div>
      )}

      {/* For other roles */}
      {/* {!(user?.role==='user' || user?.role==='scrapdealer' || user?.role==='ngo') && (
    <div className="flex flex-col h-[200%] w-[100%] bg-green-600 bg-cover bg-center bg-opacity-50"
    style={{ backgroundImage: `url(${NonLoginBg})` }}
    >   
hi hello    
  </div>
  )} */}

      {!(
        user?.role === "user" ||
        user?.role === "scrapdealer" ||
        user?.role === "ngo"
      ) && (
        <div className=" flex flex-col min-h-screen w-full ">
          <div
            className=" flex flex-col justify-center items-center inset-0 bg-cover  bg-center opacity-70"
            style={{ backgroundImage: `url(${NonLoginBg})` }}
          >
            <div className="w-full flex flex-col justify-center items-center min-h-screen text-center bg-black bg-opacity-40">
              <h1 className="text-[3rem] font-extrabold">
                Empowering Communities for a{" "}
                <span className="text-[#17e45ff8] text-opacity-40 ">
                  Greener Tomorrow
                </span>{" "}
              </h1>

              <p className="text-xl font-semibold mt-8">
                Welcome to our platform, where AI technology and community
                efforts simplify waste segregation <br /> and recycling.
                Together, we can reduce waste and create a cleaner, greener
                future for all. <br />
                Join the movement for smarter, sustainable living!
              </p>

              <div className="mt-10">
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 lg:px-8 py-2 lg:py-3 lg:text-lg lg:font-bold bg-[#01c141f8] text-white rounded-[500px] transition duration-500 transform hover:bg-[#27994df8] hover:scale-105 hover:shadow-lg hover:shadow-[#0ae854f8]/50 shadow-md shadow-[#27994df8]/50 ease-in-out"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
      
          
        </div>
      )}
    </div>

    
  );
};

export default HeroSection;
