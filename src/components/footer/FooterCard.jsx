import React from "react";
import { Link } from "react-router-dom";

function FooterCard({ text: Text, icon: Icon, Link: link }) {
  return (
    <Link
      to={link}
      className="footer-card transition-all ease-linear cursor-pointer w-[48%] xs:w-1/3 sm:flex-w-1/3	md:w-1/3 lg:w-1/3 border border-white hover:bg-black hover:text-white  py-3 px-3 bg-white rounded-2xl text-center flex justify-between lg:justify-center md:justify-center sm:justify-center xs:justify-center items-center"
    >
      <Icon />
      <h2 className="text-[12px] lg:text-[20px] md:text-[16px] sm:text-[14px] xs:text-[8px] font-medium ms-2">
        {Text}
      </h2>
    </Link>
  );
}

export default FooterCard;
