import Link from "next/link";
import React, { useState } from "react";

interface Props {
    link: {
        label: string;
        path: string;
    }
}

const NavigationButton = ({ link }: Props) => {
    
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link.path}>
        <p 
        className="relative font-josefin text-dark-color dark:text-light-color md:text-xl uppercase md:font-semibold text-2xl font-bold pl-6 md:pl-0 my-6 md:my-0 w-fit z-30">
          {link.label}
        </p>
        {isHovered && (
          <span className="md:absolute md:bottom-0 md:mx-1  md:bg-secondary-color dark:bg-primary-color md:w-full h-3"></span>
        )}
      </Link>
    </div>
  );
};

export default NavigationButton;
