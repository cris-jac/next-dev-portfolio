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
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={link.path}>
        <p className="relative font-josefinsans text-xl uppercase font-semibold z-20">
          {link.label}
        </p>
      </Link>
      {isHovered && (
        <span className="absolute bottom-0 mx-1 bg-secondary-color dark:bg-primary-color w-full h-3 z-10"></span>
      )}
    </div>
  );
};

export default NavigationButton;
