import React from "react";
import { Nav } from "../components/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

export function Layout({ children, background }) {
  return (
    <div className={`
      ${background} text-stone-200
      transition-all duration-500
      min-h-screen min-w-screen
      flex flex-col-reverse md:flex-row
    `}>
      <div className="
        flex flex-col items-stretch
        w-full md:w-[75%]
        md:min-h-screen flex-1
        overflow-y-auto
        no-scrollbar
      ">
        <div className="flex px-5 py-6 items-center justify-between">
          <Link to="/">Logo</Link>
          <div className="flex gap-3">
            <Link>
              <FontAwesomeIcon icon={faGithub} className="text-3xl"/>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl"/>
            </Link>
          </div>
        </div>
        {children}
        {/* <div className="italic text-xs">© 2025 | Pascal Ion | Paris</div> */}
      </div>
      <Nav />
    </div>
  );
}
