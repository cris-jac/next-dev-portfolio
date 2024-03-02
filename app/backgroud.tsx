
import React from "react";

const Background = () => {

  return (
    <div
      className="absolute inset-0 bg-light-color dark:bg-dark-color"
      style={{
        backgroundImage: `radial-gradient(#8E8C93 1px, rgba(0,0,0,0) 1px)`,
        backgroundSize: "7px 7px",
        opacity: "0.05",
        zIndex: -1,
      }}
    ></div>
  );
};

export default Background;
