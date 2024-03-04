import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex items-center bg-dark-color border-t border-primary-color">
      <div className="w-full max-w-screen-lg mx-auto px-4 flex flex-col">
        <div className="flex flex-row items-center justify-between py-2 border-b border-light-color">
            <Link href={"/"}>
              <Image alt="logo" src={logo} width={80} />
            </Link>
            <div>
                <h1 className="text-right font-manjari text-sm font-bold my-1 text-light-color">Redes</h1>
                <p className="text-right font-manjari text-xs text-light-color">Seguime en:</p>
                <div className="flex flex-row justify-end gap-3 py-1">
                    <a href="https://wwww.github.com" target="_blank">
                        <GrGithub className="text-lg text-light-color"/>
                    </a>
                    <a href="https://wwww.linkedin.com" target="_blank">
                        <GrLinkedin className="text-lg text-light-color"/>
                    </a>
                </div>
            </div>
        </div>

        <div className="text-xs font-manjari text-center md:text-left pb-4 pt-2 text-light-color">
            <p>Este sitio fue prototipado con Figma, desarrollado con React y creado con pasion!</p>
            <p>©2024. Todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
