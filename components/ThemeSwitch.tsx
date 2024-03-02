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

    if (resolvedTheme === "dark") {
        return <GrSun className='text-4xl text-[light-color]' onClick={()=> setTheme('light')}/>
    }

    if (resolvedTheme === "light") {
        return <GrMoon className='text-4xl bg-[primary-color] text-[dark-color]' onClick={() => setTheme('dark')}/>
    }
}

export default ThemeSwitch