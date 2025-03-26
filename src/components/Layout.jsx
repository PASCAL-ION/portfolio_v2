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
        h-screen
        overflow-y-auto
        pt-5
        no-scrollbar
      ">
        {children}
      </div>
      <Nav />
    </div>
  );
}