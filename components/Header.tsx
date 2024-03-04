'use client';

import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavigationButton from './NavigationButton';
import { GrClose } from "react-icons/gr";
import { GrMenu } from "react-icons/gr";

const navLinks = [
  { label: "sobre mi", path: "/about" },
  { label: "proyectos", path: "/portfolio" },
  { label: "contacto", path: "/contact" },
]

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`w-full h-24 flex items-center dark:bg-dark-color bg-light-color border-b border-primary-color relative`}>
      <div className='w-full max-w-screen-lg mx-auto px-4 flex flex-row justify-between relative'>
        <div>
          <Link href={"/"}>
            <Image alt='logo' src={logo} width={120}/>
          </Link>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <ThemeSwitch />

          <div className='hidden md:flex md:flex-row md:gap-4'>
            {navLinks.map((link, index) => (
              <NavigationButton key={index} link={link} />
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden z-40'>
            {isMenuOpen ? (
              <GrClose className='text-2xl hover:text-secondary-color text-dark-color dark:text-light-color' />
            ) : (
              <GrMenu className='text-2xl hover:text-secondary-color text-dark-color dark:text-light-color' />
            )}
          </button>
          <div className={`flex flex-col fixed md:hidden top-0 py-32 ${isMenuOpen ? "right-0 transition-all duration-500 ease-in-out" : "-right-[500px] hidden"} text-center w-1/2 h-screen py-4 border-secondary-color dark:border-primary-color border-l dark:bg-primary-color dark:bg-opacity-95 bg-secondary-color bg-opacity-95 backdrop-blur-sm z-30`}>
            {navLinks.map((link, index) => (
              <NavigationButton key={index} link={link} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header