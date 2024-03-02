import Link from "next/link";
import React from "react";

const ActionButton = () => {
  return (
    <div className="relative w-fit">
      <Link href={"/contact"}>
        <button className="absolute font-manjari text-4xl py-5 px-10 text-dark-color font-bold bg-accent-color -top-6 -left-1 active:-top-5 active:-left-0 z-20">
          Hablemos
        </button>
      </Link>
      <span className="relative font-manjari text-4xl py-5 px-10 dark:bg-light-color bg-dark-color  z-10">
        Hablemos
      </span>
    </div>
  );
};

export default ActionButton;
