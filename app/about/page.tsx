import React from "react";
import Background from "../backgroud";
import banner from "@/public/banner1.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full p-4 min-h-screen relative bg-light-color dark:bg-dark-color">
      <Background />

        <div>
            <Image alt="banner" src={banner} className="w-full h-200" />
        </div>

      <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">

      </main>
    </div>
  );
};

export default About;
