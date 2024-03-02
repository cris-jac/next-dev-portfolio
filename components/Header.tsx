'use client';

import React from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <div className='bg-light-color dark:bg-dark-color border-slate-600 flex flex-row items-center justify-between'>
      <p className='text-2xl'>Header</p>
      <ThemeSwitch />
    </div>
  )
}

export default Header