import React from "react";
import Background from "../backgroud";
import TitleBanner from "@/components/TitleBanner";
import { GrCertificate } from "react-icons/gr";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";
import { bannerTitlesData } from "@/constants";
import { aboutTextData } from "@/constants";
import { aboutSvgData } from "@/constants";

const banner = bannerTitlesData[0];

const About = () => {
  return (
    <div className="w-full min-h-screen relative bg-light-color dark:bg-dark-color ">
      <TitleBanner banner={banner} />

      <div className="p-4 ">
        <Background />
        <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">
          <div className="flex flex-col md:flex-row w-full justify-between gap-4">
            <div className="flex flex-col w-full md:w-1/2">
              <div className="text-left relative my-12 w-fit">
                <p className="relative text-4xl font-manjari font-bold z-20">
                  ¿quien soy?
                </p>
                <span className="absolute w-full bg-secondary-color dark:bg-primary-color h-4 bottom-2 left-2 z-10"></span>
              </div>
              <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">
                {aboutTextData[0]}
              </p>
              <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">
                {aboutTextData[1]}
              </p>

              <div className="flex flex-col gap-8 items-center lg:flex-row justify-around my-8">
                <div className="relative w-fit">
                  <div className="relative flex flex-row z-20">
                    <div className="absolute top-0 left-0 w-full h-full border dark:bg-primary-color bg-light-color  border-primary-color dark:border-light-color"></div>

                    <a
                      href="/CV_2024.pdf"
                      className="relative -left-1 -top-1 
                                active:-left-0 active:-top-0
                                px-5 py-2.5 dark:bg-light-color bg-primary-color flex flex-row items-center gap-2 z-20 w-fit
                                "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrCertificate className="text-xl lg:text-2xl text-light-color dark:text-primary-color" />
                      <p className="text-xl lg:text-2xl text-light-color dark:text-primary-color font-manjari">
                        CURRICULUM
                      </p>
                    </a>
                  </div>
                </div>
                <div className="relative w-fit">
                  <div className="relative flex flex-row z-20">
                    <div className="absolute top-0 left-0 w-full h-full border dark:bg-primary-color bg-light-color  border-primary-color dark:border-light-color"></div>

                    <a
                      href="/CV_2024_EN.pdf"
                      className="relative -left-1 -top-1 
                                active:-left-0 active:-top-0
                                px-5 py-2.5 dark:bg-light-color bg-primary-color flex flex-row items-center gap-2 z-20 w-fit
                                "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GrCertificate className="text-xl lg:text-2xl text-light-color dark:text-primary-color " />
                      <p className="text-xl lg:text-2xl text-light-color dark:text-primary-color font-manjari">
                        RESUME (EN)
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <div className="text-left relative my-12 w-fit">
                <p className="relative text-4xl font-manjari font-bold z-20">
                  ¿que hago?
                </p>
                <span className="absolute w-full bg-secondary-color dark:bg-primary-color h-4 bottom-2 left-2 z-10"></span>
              </div>
              <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">
                {aboutTextData[2]}
              </p>
              <div className="grid grid-cols-3 gap-4 my-8">
                {aboutSvgData.map((item, index) => (
                  <div className="flex flex-col items-center" key={index}>
                    <Image
                      alt="database"
                      src={item.svgFile}
                      width={64}
                      height={64}
                    />
                    <p className="text-center font-manjari text-lg">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center my-16">
                <ActionButton />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
