import logo from "/logo.png";
import IconCard from "../icon/IconCard";
import { FaLinkedinIn, FaFacebook, FaGithub } from "../icon/icons";

import "../../index.css";

function NavBar() {
  return (
    <nav className="flex mt-3 justify-between items-center bg-white py-3 px-5 rounded-full min-h-[10vh] w-[95%] mx-auto">
      <div className="icons flex gap-2">
        <IconCard icon={FaGithub} link="https://github.com/moazelgandy2" />
        <IconCard icon={FaLinkedinIn} link="https://www.linkedin.com/in/moazelgandy2/" />
        <IconCard icon={FaFacebook} link="https://www.facebook.com/MoazElgandy2" />
      </div>
      <div className="logo hidden lg:flex md:flex sm:flex justify-center items-center">
        <img src={logo} alt="Website logo" className="rounded-full w-[25px] h-[25px]" />
      </div>
      <a href="mailto:contact@moazelgandy.tech">
        <button className="contact font-medium min-[350px]:text-md max-[349px]:text-[10px] text-md px-4 py-2 rounded-full border border-black bg-white text-black hover:bg-black hover:text-white transition-all ease-linear">
          GET IN TOUCH
        </button>
      </a>
    </nav>
  );
}
export default NavBar;
