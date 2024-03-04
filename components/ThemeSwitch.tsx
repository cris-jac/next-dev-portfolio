'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { GrSun } from "react-icons/gr";
import { GrMoon } from "react-icons/gr";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, [])

    if (mounted) {
        if (resolvedTheme === "dark") {
            return <GrSun className='text-2xl hover:text-secondary-color text-light-color hover:cursor-pointer z-40' onClick={()=> setTheme('light')}/>
        }
    
        if (resolvedTheme === "light") {
            return <GrMoon className='text-2xl hover:text-secondary-color text-dark-color hover:cursor-pointer z-40' onClick={() => setTheme('dark')}/>
        }
    }
}

export default ThemeSwitch