import React from "react";
import { FooterCard } from "../../components";
import { SiAboutdotme, FaRegFileCode, IoMailOutline } from "../../components/icon/Icons";
import "../../index.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mx-auto px-2 xs:min-w-[95%] min-h-[100v] xs:text-center">
      <div className="content my-3 py-3 px-3 min-h-[85vh] bg-white flex justify-evenly items-center flex-col rounded-2xl">
        <h1 className="text-[22px] font-light lg:font-medium md:font-meium sm:font-medium mt-4">
          Hello, I'm Moaz Front-end Developer
        </h1>
        <h2 className="text-[24px] lg:text-[55px] md:text-[48px] sm:text-[38px] text-center mt-3 font-medium w-3/4">
          I'm creating digital solutions for tomorrow's challenges
        </h2>
        <p className="mt-5 text-[12px] lg:text-[14px] md:text-[14px] sm:text-[14px] font-semibold text-center">
          Dedicated web developer shaping powerful digital solutions for the challenges that lie
          ahead.
        </p>
        <button className="bg-black text-white p-3 my-8 rounded-full font-medium hover:bg-white hover:text-black border border-black ease-linear transition-all">
          VIEW WORK
        </button>
      </div>

      <Link to={"#works"}>TT</Link>
      <FooterCard icon={SiAboutdotme} text="About" />

      <div className="footer flex justify-between items-center gap-8"></div>
    </div>
  );
};

export default Home;
