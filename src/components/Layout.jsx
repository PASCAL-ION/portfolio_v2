import React from "react";
import { Nav } from "../components/Nav";

export function Layout({ children, background }) {
  return (
    <div className={`
      ${background} text-stone-200
      transition-all duration-500
      h-screen w-screen
      flex flex-col-reverse md:flex-row
      items-center md:justify-center justify-end
      overflow-hidden
    `}>
      <div className="
        flex
        w-full md:w-[65%]
        h-full
        items-center
      ">
        {children}
      </div>
      <Nav />
    </div>
  );
}
