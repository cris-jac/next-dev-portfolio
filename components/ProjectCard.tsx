'use client';

import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { GrCli } from "react-icons/gr";
import { ProjectProps } from "@/types";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectProps;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="flex flex-col my-4"
    >
      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className="relative border-2 border-dark-color dark:border-light-color">
        <div className="relative w-full overflow-hidden h-64 sm:h-96 md:h-64">
          <Image
            src={project.img}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className={`${isHovered ? "grayscale blur-sm" : "grayscale-[50%]"}`}
          />

        </div>
        <p className="absolute bottom-0 font-manjari text-sm text-light-color dark:text-dark-color bg-dark-color dark:bg-light-color border-t-2 border-r-2  w-fit px-2.5 py-1 border-dark-color dark:border-light-color">
          {project.projectType}
        </p>

        {isHovered && (
            project.links.demoUrl ? (
            <div>
              <a
                href={project.links.repositoryUrl}
                target="_blank"
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-full gap-4 py-2.5 px-5 drop-shadow-md"
              >
                <GrCli className="text-primary-color text-lg" />
                <span className="text-primary-color text-lg font-manjari">
                  Ver repositorio
                </span>
              </a>
              <a
                href={project.links.demoUrl}
                target="_blank"
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute transform left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2 gap-4 py-2.5 px-5 drop-shadow-md"
              >
                <GrView className="text-primary-color text-lg" />
                <span className="text-primary-color text-lg font-manjari">
                  Ver demo
                </span>
              </a>
            </div>
          ) : (
            <div>
              <a
                href={project.links.repositoryUrl}
                target="_blank"
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute transform left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 gap-4 py-2.5 px-5 drop-shadow-md"
              >
                <GrCli className="text-primary-color text-lg" />
                <span className="text-primary-color text-lg font-manjari">
                  Ver repositorio
                </span>
              </a>
            </div>
            )
          )}
      </div>

      <div className="flex flex-row gap-2 justify-center my-2.5">
        {project.techTags.map((tag, index) => (
          <p
            key={index}
            className="font-josefin text-sm bg-primary-color text-light-color px-2 py-0.5"
          >
            {tag}
          </p>
        ))}
      </div>

      <h1 className="font-manjari text-dark-color dark:text-light-color text-center text-2xl">
        {project.title}
      </h1>
      <p className="font-manjari text-dark-color dark:text-light-color text-center text-base leading-tight">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
