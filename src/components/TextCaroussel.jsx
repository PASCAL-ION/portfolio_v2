import { Link } from "react-router-dom";

export function TextCaroussel({ wordArray, direction, linkTo }) {
  let animationClass = "";

  if (direction === "up") {
    animationClass = "animate-scroll-up";
  } else if (direction === "down") {
    animationClass = "animate-scroll-down";
  } else if (direction === "right") {
    animationClass = "animate-scroll-right";
  } else if (direction === "left") {
    animationClass = "animate-scroll-left";
  }

  const isVertical = direction === "up" || direction === "down";
  const flexDirection = isVertical ? "flex-col" : "flex-row";

  return (
    <div
        className={`flex flex-col grow md:h-screen overflow-hidden transition-all duration-500 bg-[#0c0c0c87] hover:bg-slate-100`}
      >
      <Link to={linkTo}>
        <div
          className={`flex ${flexDirection} 
            border-l border-b border-white text-white hover:text-black cursor-pointer
            ${animationClass}`}
        >
          {[...wordArray, ...wordArray].map((letter, index) => (
            <p
              key={`${letter}-${index}`}
              className="text-3xl font-opensans px-3 py-2 w-full text-center tracking-wider transition-colors duration-300"
            >
              {letter}
            </p>
          ))}
        </div>
      </Link>
    </div>
  );
}