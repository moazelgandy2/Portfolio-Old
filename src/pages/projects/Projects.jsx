import React from "react";
import { NavBar, PorjectCard } from "../../components";
import Daniels from "../../assets/projects/Daniels.png";
import Weatherize from "../../assets/projects/Weatherize.png";
import BookMarks from "../../assets/projects/BookMarks.png";
import DevFolio from "../../assets/projects/DevFolio.png";
import ToDoX from "../../assets/projects/ToDoX.png";
import Quotes from "../../assets/projects/Quotes.png";

function Projects() {
  return (
    <div>
      <NavBar />
      <div className="content my-3 py-3 px-3 bg-white rounded-2xl">
        <h2 className="text-black font-bold text-[50px]">Projects</h2>
        <div className="cards grid grid-cols-12 mt-5 px-3 gap-x-4">
          <PorjectCard
            ProjImg={DevFolio}
            ProjName="Bookmarks-Hub"
            ProjDesc="Web application that allows users to easily manage their website bookmarks."
            LiveDemo="https://moazelgandy2.github.io/Bookmarks-Hub"
            GitHub="https://github.com/moazelgandy2/Bookmarks-Hub"
          />
          <PorjectCard
            ProjImg={Daniels}
            ProjName="Daniels"
            ProjDesc="Onepage Portfolio Template, aimed at providing a single-page portfolio website template."
            LiveDemo="https://moazelgandy2.github.io/Daniels"
            GitHub="https://github.com/moazelgandy2/Daniels"
          />
          <PorjectCard
            ProjImg={ToDoX}
            ProjName="Weatherize"
            ProjDesc="A sleek, responsive weather app. It utilizes WeatherAPI for accurate location-based weather forecasts."
            LiveDemo="https://moazelgandy2.github.io/Weatherize"
            GitHub="https://github.com/moazelgandy2/Weatherize"
          />
          <PorjectCard
            ProjImg={Weatherize}
            ProjName="Weatherize"
            ProjDesc="A sleek, responsive weather app. It utilizes WeatherAPI for accurate location-based weather forecasts."
            LiveDemo="https://moazelgandy2.github.io/Weatherize"
            GitHub="https://github.com/moazelgandy2/Weatherize"
          />
          <PorjectCard
            ProjImg={Quotes}
            ProjName="Weatherize"
            ProjDesc="A sleek, responsive weather app. It utilizes WeatherAPI for accurate location-based weather forecasts."
            LiveDemo="https://moazelgandy2.github.io/Weatherize"
            GitHub="https://github.com/moazelgandy2/Weatherize"
          />

          <PorjectCard
            ProjImg={BookMarks}
            ProjName="Bookmarks-Hub"
            ProjDesc="Web application that allows users to easily manage their website bookmarks."
            LiveDemo="https://moazelgandy2.github.io/Bookmarks-Hub"
            GitHub="https://github.com/moazelgandy2/Bookmarks-Hub"
          />
        </div>
      </div>
    </div>
  );
}
export default Projects;
