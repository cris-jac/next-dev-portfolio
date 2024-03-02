
import React from "react";

const Background = () => {

  return (
    // <div
    //   className="relative bg-light-color dark:bg-dark-color"
    // >
    //   <div 
    //   className="absolute inset-0"
    //   style={{
    //     backgroundImage: `radial-gradient(#8E8C93 1px, rgba(0,0,0,0) 1px)`,
    //     backgroundSize: "7px 7px",
    //     backgroundColor: 'none',
    //     opacity: "0.05",
    //     zIndex: 1,
    //   }}></div>

    // </div>
    <div 
      className="absolute inset-0 w-full"
      style={{
        backgroundImage: `radial-gradient(#8E8C93 1px, rgba(0,0,0,0) 1px)`,
        backgroundSize: "7px 7px",
        backgroundColor: 'none',
        opacity: "0.1",
        zIndex: 0,
      }}>
      </div>
  );
};

export default Background;
