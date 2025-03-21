import { TextCaroussel } from "../components/TextCaroussel";
import { useMouse } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";

export function Home() {
  const projectsWordArray = ["P", "R", "O", "J", "E", "T", "S", "."];
  const contactWordArray = ["C", "O", "N", "T", "A", "C", "T", "."];

  // Refs pour ION et PASCAL
  const ionRef = useRef(null);
  const pascalRef = useRef(null);

  // Suivi de la souris avec les refs déjà existantes
  const mouseIon = useMouse(ionRef);
  const mousePascal = useMouse(pascalRef);

  const [ionRect, setIonRect] = useState({ width: 0, height: 0 });
  const [pascalRect, setPascalRect] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ionRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const rect = ionRef.current.getBoundingClientRect();
      setIonRect({
        width: rect.width,
        height: rect.height,
      });
    });

    resizeObserver.observe(ionRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!pascalRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const rect = pascalRef.current.getBoundingClientRect();
      setPascalRect({
        width: rect.width,
        height: rect.height,
      });
    });

    resizeObserver.observe(pascalRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const centerXIon = ionRect.width / 2;
  const centerYIon = ionRect.height / 2;
  const diffXIon = mouseIon.elementX - centerXIon;
  const diffYIon = mouseIon.elementY - centerYIon;
  const inverseXIon = centerXIon - diffXIon;
  const inverseYIon = centerYIon - diffYIon;

  const centerXPascal = pascalRect.width / 2;
  const centerYPascal = pascalRect.height / 2;
  const diffXPascal = mousePascal.elementX - centerXPascal;
  const diffYPascal = mousePascal.elementY - centerYPascal;
  const inverseXPascal = centerXPascal - diffXPascal;
  const inverseYPascal = centerYPascal - diffYPascal;

  return (
    <div className="bg-stone-900 transition-all duration-500 h-screen w-screen flex items-center justify-center overflow-hidden text-stone-200">
      <div className="flex flex-row w-full h-full">

        {/* LEFT SIDE */}
        <div className="flex w-[65%] items-center">
          <div className="flex items-start flex-col gap-8 w-full">

            {/* ION LINK */}
            <div
              ref={ionRef}
              className="ml-[15%]"
            >
              <Link
                to="/aboutperso"
                data-text="ION"
                className="link-style link-ion"
                style={{
                  "--mouseIon-x": `${inverseXIon}px`,
                  "--mouseIon-y": `${inverseYIon}px`,
                }}
              >
                ION
              </Link>
            </div>

            {/* PASCAL LINK */}
            <div
              ref={pascalRef}
              className="ml-[30%]"
            >
              <Link
                to="/aboutpro"
                data-text="PASCAL"
                className="link-style link-pascal"
                style={{
                  "--mousePascal-x": `${inverseXPascal}px`,
                  "--mousePascal-y": `${inverseYPascal}px`,
                }}
              >
                PASCAL
              </Link>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <nav className="flex flex-col h-screen w-[35%]">
          <div className="flex h-full w-full relative">
            <TextCaroussel wordArray={projectsWordArray} direction="up" />
            <TextCaroussel wordArray={contactWordArray} direction="down" />
          </div>
        </nav>

      </div>
    </div>
  );
}
