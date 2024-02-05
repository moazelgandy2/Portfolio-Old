import React from "react";
import { Link } from "react-router-dom";

function FooterCard({ text: Text, icon: Icon, Link: link }) {
  return (
    <>
      <footer className="flex justify-evenly gap-2 flex-wrap xs:flex-nowrap  sm:flex-nowrap	md:flex-nowrap lg:flex-nowrap">
        <div className="footer-card transition-all ease-linear cursor-pointer w-1/2 border border-white hover:bg-black hover:text-white  py-3 px-3 bg-white rounded-2xl text-center flex justify-between lg:justify-center md:justify-center sm:justify-center xs:justify-center items-center">
          <Icon />
          <h2 className="text-[12px] lg:text-[20px] md:text-[16px] sm:text-[14px] xs:text-[8px] font-medium ms-2">
            {Text}
          </h2>
        </div>
      </footer>
    </>
  );
}

export default FooterCard;
