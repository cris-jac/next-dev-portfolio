import TitleBanner from "@/components/TitleBanner";
import React from "react";
import Background from "../backgroud";
import bannerImg from "@/public/banner2.png";
import { BannerProps, ProjectProps } from "@/types";
import pjImg from "@/public/pj01.png";
import ProjectCard from "@/components/ProjectCard";

const banner: BannerProps = {
  title: "Proyectos",
  textColor: "text-light-color",
  bgColor: "bg-primary-color",
  bannerPicture: {
    alt: "banner 2",
    ref: bannerImg,
  },
};


const pj01: ProjectProps = {
    img: pjImg,
    links: {
        repositoryUrl: "https://www.github.com",
        demoUrl: "https://www.github.com"
    },
    projectType: "BackEnd",
    techTags: [".NET", "MongoDB"],
    title: "Books Api",
    description: "An Rest API with .NET Core 8 as the framework for the middleware, and MongoDb for the database. Cotains Authorization. Contains relations collections."
} 

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen relative bg-light-color dark:bg-dark-color ">
      <TitleBanner banner={banner} />

      <div className="p-4 ">
        <Background />
        <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProjectCard project={pj01} />
                

            </div>

        </main>
      </div>
    </div>
  );
};

export default Portfolio;
