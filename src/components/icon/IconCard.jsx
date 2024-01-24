import React from "react";

function IconCard({ link: Link, icon: Icon }) {
  return (
    <a href={`${Link}`} target="_blank">
      <div className=" cursor-pointer hover:bg-black hover:text-white transition-all ease-linear text-[16px] bg-white border border-black w-[30px] h-[30px] rounded-full flex justify-center items-center ">
        <Icon />
      </div>
    </a>
  );
}

export default IconCard;
