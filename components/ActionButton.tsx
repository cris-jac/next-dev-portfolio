import Link from "next/link";
import React from "react";

const ActionButton = () => {
  return (
    <div className="relative w-fit">
      <Link href={"/contact"}>
        <button className="relative font-manjari text-2xl md:text-3xl lg:text-4xl py-3 md:py-5 px-5 md:px-10 text-dark-color font-bold bg-accent-color -top-1 -left-1 active:-top-0 active:-left-0 z-20">
          Hablemos
        </button>
      </Link>
      <span className="absolute top-0 left-0 w-full h-full dark:bg-light-color bg-dark-color"></span>
    </div>
  );
};

export default ActionButton;
