import React from "react";
import Background from "../backgroud";
import bannerImg from "@/public/banner1.png";
import TitleBanner from "@/components/TitleBanner";
import { BannerProps } from "@/types";
import { GrCertificate } from "react-icons/gr";
import databaseSvg from "@/public/database.svg";
import displaySvg from "@/public/display.svg";
import codeSvg from "@/public/code3.svg";
import Image from "next/image";
import ActionButton from "@/components/ActionButton";

const banner: BannerProps = {
    title: "Sobre mi",
    textColor: "text-primary-color",
    bgColor: "bg-light-color",
    bannerPicture: {
        alt: "banner 1",
        ref: bannerImg,
    }
}

const textData = [
    "Soy un estudiante de desarrollo de software, apasionado por la tecnologia y el aprendizaje. Mi viaje inicio con desarrollo web, lo que me llevo a frontend con React y posteriormente a backend con .NET y Node.js, al menos por ahora, ya que planeo expandirme a otras tecnologias.",
    "A lo largo de este viaje, participe en varios proyectos, que desafiaron mis habilidades de resolver problemas. En estas experiencias note que la importancia de una mente abierta, la colaboracion y el feedback son la clave de un efectivo trabajo de equipo. Y mientras siga este viaje, seguire aprendiendo para crear o ser parte del desarrollo de proyectos que tenga un impacto positivo.",
    "Mi trabajo, pudiendo ser frontend o backend, se enfoca en la integracion de sitios web funcionales, que trabajen desde el servidor hasta las manos del cliente. Para ello, yo realizo:"
]

const svgData = [
    { label: "Diseño de base de datos", svgFile: databaseSvg },
    { label: "Integración de API", svgFile: codeSvg },
    { label: "Diseño de interfaz de usuario (UI)", svgFile: displaySvg },
]

const About = () => {
  return (
    <div className="w-full min-h-screen relative bg-light-color dark:bg-dark-color ">
      <TitleBanner banner={banner} />

      <div className="p-4 ">
        <Background />
        <main className="flex flex-col items-center lg:flex-row justify-between w-full max-w-screen-lg mx-auto relative">
            <div className="flex flex-col md:flex-row w-full justify-between">
                <div className="flex flex-col ">
                    <div className="text-left relative my-12 w-fit">
                        <p className="relative text-4xl font-manjari font-bold z-20">¿quien soy?</p>
                        <span className="absolute w-full bg-secondary-color dark:bg-primary-color h-4 bottom-2 left-2 z-10"></span>
                    </div>
                    <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">{textData[0]}</p>
                    <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">{textData[1]}</p>

                    <div className="flex flex-col gap-8 items-center md:flex-row justify-around my-8">
                        <div className="relative w-fit">
                            <div className="relative flex flex-row z-20">
                                <div className="absolute top-0 left-0 w-full h-full border dark:bg-primary-color bg-light-color  border-primary-color dark:border-light-color">
                                </div>

                                <a href="/da_cv_2023_es.pdf" className="relative -left-1 -top-1 
                                active:-left-0 active:-top-0
                                px-5 py-2.5 dark:bg-light-color bg-primary-color flex flex-row items-center gap-2 z-20 w-fit
                                " target="_blank" rel="noreferrer">
                                    <GrCertificate className="text-2xl text-light-color dark:text-primary-color"/>
                                    <p className="text-2xl text-light-color dark:text-primary-color font-manjari">CURRICULUM</p>
                                </a>
                            </div>
                        </div>
                        <div className="relative w-fit">
                            <div className="relative flex flex-row z-20">
                                <div className="absolute top-0 left-0 w-full h-full border dark:bg-primary-color bg-light-color  border-primary-color dark:border-light-color">
                                </div>

                                <a href="/da_cv_2023_en.pdf" className="relative -left-1 -top-1 
                                active:-left-0 active:-top-0
                                px-5 py-2.5 dark:bg-light-color bg-primary-color flex flex-row items-center gap-2 z-20 w-fit
                                " target="_blank" rel="noreferrer">
                                    <GrCertificate className="text-2xl text-light-color dark:text-primary-color "/>
                                    <p className="text-2xl text-light-color dark:text-primary-color  font-manjari">RESUME (EN)</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="text-left relative my-12 w-fit">
                        <p className="relative text-4xl font-manjari font-bold z-20">¿que hago?</p>
                        <span className="absolute w-full bg-secondary-color dark:bg-primary-color h-4 bottom-2 left-2 z-10"></span>
                    </div>
                    <p className="text-lg font-manjari text-dark-color dark:text-light-color my-2">{textData[2]}</p>
                    <div className="grid grid-cols-3 gap-4 my-8">
                        {svgData.map((item, index) => (
                            <div className="flex flex-col items-center" key={index}>
                                <Image alt="database" src={item.svgFile}/>
                                <p className="text-center font-manjari text-lg">{item.label}</p>
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
