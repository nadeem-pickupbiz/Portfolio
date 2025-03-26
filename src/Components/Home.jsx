import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import image from "../Components/image/developer.jpg";

import { ReactTyped,} from "react-typed";
import AOS from "aos"


const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          {/* Left div  */}
          <div data-aos="fade-right" className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome to Nadeem's World</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span className="text-red-700 font-bold">Web Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer" , "Coder" , "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              animi cum dignissimos officiis provident blanditiis itaque fuga
              laborum quisquam vero error accusamus consequatur ipsa quaerat,
              optio numquam! Distinctio, consequatur ad?
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 justify-between">
            <div className="space-y-2">
                <h1 className="font-bold">Available On</h1>
                <ul className="flex space-x-5">
                    <li>
                    <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook className="text-2xl cursor-pointer"/>
                    </a>
                    </li>                
                <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                    <FaLinkedin className="text-2xl cursor-pointer"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/" target="_blank">
                    <IoLogoYoutube className="text-2xl cursor-pointer"/>
                    </a>
                </li>
                <li>
                    <a href="http://">
                    <FaTelegram className="text-2xl cursor-pointer"/>
                    </a>
                </li>
                </ul>
            </div>
            <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full boreder-[2px]"/>
                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                </div>
            </div>
            </div>
          </div>
          {/* Right div  */}
          <div className="md:w-1/2 md:mt-24 order-1">
          <img src={image} alt="" className="h-64 mx-[2%] sm:ml-[25%] hover:shadow-sky-300"/>
          </div>
        </div>
      </div>
      <hr className="my-8 w-full"/>
    </>
  );
};

export default Home;
