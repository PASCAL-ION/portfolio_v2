import React from "react";
import { Nav } from "../components/Nav";

export function Layout({ children, background }) {
  return (
    <div className={`
      ${background} text-stone-200
      transition-all duration-500
      min-h-screen min-w-screen
      flex flex-col-reverse md:flex-row
      items-center md:justify-center md:items-start justify-end
      overflow-hidden
    `}>
      <div className="
        flex flex-col items-stretch
        w-full md:w-[75%]
        md:min-h-screen flex-1
        overflow-y-auto
        no-scrollbar
      ">
        {children}
      </div>
      <Nav />
    </div>
  );
}