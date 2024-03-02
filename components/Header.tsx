'use client';

import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'
import logo from '@/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavigationButton from './NavigationButton';

const navLinks = [
  { label: "sobre mi", path: "/about" },
  { label: "proyectos", path: "/portfolio" },
  { label: "contacto", path: "/contact" },
]

const Header = () => {
  return (
    <div className='w-full h-24 flex items-center bg-light-color dark:bg-dark-color border-b border-primary-color'>
      <div className='w-full max-w-screen-lg mx-auto px-4 flex flex-row justify-between '>
        <div>
          <Link href={"/"}>
            <Image alt='logo' src={logo} width={120}/>
          </Link>
        </div>
        <div className='flex flex-row items-center gap-4'>
          <ThemeSwitch />
          {navLinks.map((link, index) => (
            <NavigationButton key={index} link={link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header