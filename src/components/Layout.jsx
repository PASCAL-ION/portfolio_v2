import React from "react";
import { Nav } from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export function Layout({ children, background }) {
  return (
    <div
      className={`
      ${background} text-stone-200
      transition-all duration-500
      min-h-screen min-w-screen
      flex flex-col-reverse md:flex-row
    `}
    >
      <div
        className="
        flex flex-col items-stretch
        w-full md:w-[75%]
        md:min-h-screen flex-1
        overflow-y-auto
        no-scrollbar
        justify-items-start
        relative
      "
      >
        <div className="flex px-5 py-6 items-center justify-between">
          <Link to="/">
            <img
              src="/assets/logo.png"
              alt="logo"
              className="md:h-[50px] h-[40px]"
            />
          </Link>
          <div className="flex gap-3">
            <a
              href="https://github.com/PASCAL-ION"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="md:text-3xl text-2xl"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ionpascal"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="md:text-3xl text-2xl"
              />
            </a>
          </div>
        </div>
        {children}
      </div>
      <Nav />
    </div>
  );
}
