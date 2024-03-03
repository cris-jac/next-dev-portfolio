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
      className="flex flex-col justify-center"
    >
      <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} 
      className="relative border-2 border-dark-color dark:border-light-color">
        <Image
          src={project.img}
          alt={project.title}
          className={`${isHovered ? "grayscale" : "grayscale-[50%] "}`}
        />
        <p className="absolute bottom-0 font-manjari text-sm dark:text-dark-color bg-light-color border-tr border-light-color dark:border-dark-color w-fit px-2.5 py-1">
          {project.projectType}
        </p>

        {isHovered && (
            project.links.demoUrl ? (
            <div>
              <a
                href={project.links.repositoryUrl}
                target="_blank"
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute top-[25%] left-[25%] gap-4 py-2.5 px-5"
              >
                <GrCli className="text-primary-color text-lg" />
                <span className="text-primary-color text-lg font-manjari">
                  Ver repositorio
                </span>
              </a>
              <a
                href={project.links.demoUrl}
                target="_blank"
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute top-[55%] left-[30%] gap-4 py-2.5 px-5"
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
                className="bg-light-color border-primary-color flex flex-row items-center w-fit absolute top-[40%] left-[25%] gap-4 py-2.5 px-5"
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
