import TitleBanner from "@/components/TitleBanner";
import React from "react";
import Background from "../backgroud";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/constants";
import { bannerTitlesData } from "@/constants";

const banner = bannerTitlesData[1];

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen relative bg-light-color dark:bg-dark-color ">
      <TitleBanner banner={banner} />

      <div className="p-4 ">
        <Background />
        <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
