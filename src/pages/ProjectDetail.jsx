import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faUserGroup, faHourglassStart, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProject = data.find((p) => p.id.toString() === id);
        setProject(foundProject);
      });
  }, [id]);

  if (!project) {
    return <div className="text-center text-xl mt-20">Chargement...</div>;
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? Object.values(project.images).length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === Object.values(project.images).length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col items-center p-4 md:p-6 space-y-10">
  <div className="flex flex-col md:flex-row h-auto md:h-[50vh] w-full gap-6 md:gap-10">
    {/* Left Section */}
    <div className="flex-1 flex flex-col items-start gap-6 md:gap-8 justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-bold text-center md:text-left"
      >
        {project.name}
      </motion.h1>
      <div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center md:justify-start">
        <a
          href={project.links.github || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 md:px-8 py-2 bg-gray-200 rounded-full text-black text-lg md:text-2xl ${
            !project.links.github ? "text-gray-400 cursor-not-allowed" : ""
          }`}
          onClick={(e) => !project.links.github && e.preventDefault()}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        {!project.links.github && (
          <p className="text-sm italic text-gray-500 mt-2">Bientôt disponible...</p>
        )}
        <a
          href={project.links.live || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`px-6 md:px-8 py-2 bg-gray-200 rounded-full text-black text-lg md:text-2xl ${
            !project.links.live ? "hidden" : ""
          }`}
          onClick={(e) => !project.links.live && e.preventDefault()}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        {!project.links.live && (
          <p className="text-sm italic text-gray-500 mt-2 hidden">Bientôt disponible...</p>
        )}
      </div>
    </div>

    <div className="flex-1 flex flex-col items-end justify-between gap-4 md:gap-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-64 md:h-full overflow-hidden rounded-xl"
      >
        <img
          src={`${project.images.img1.src}`}
          alt="image de la page d'accueil du projet"
          className="w-full h-full object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm md:text-lg w-full md:w-1/2 italic text-right flex flex-col gap-1 items-end"
      >
        {Object.entries(project.stats).map(([key, value], index) => (
          <p key={index} className="italic text-base font-semibold">
            {value} :{" "}
            {key === "team" ? (
              <FontAwesomeIcon icon={faUserGroup} />
            ) : (
              <FontAwesomeIcon icon={faHourglassStart} />
            )}
          </p>
        ))}
      </motion.div>
    </div>
  </div>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
    className="flex flex-wrap justify-center gap-2 md:gap-4 md:py-10"
  >
    {project.stack.map((tech, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        className="px-3 md:px-4 py-1 md:py-2 bg-gray-200 rounded-full text-black text-xs md:text-sm"
      >
        {tech}
      </motion.div>
    ))}
  </motion.div>

  <div className="w-full space-y-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-lg md:text-2xl font-semibold pb-4 md:pb-8 text-center md:text-left"
    >
      {project.description}
    </motion.h2>
  </div>

{/* Carousel or Video Section */}
<div className="w-full mt-10 relative">
  {project.video ? (
    project.video.trim() !== "" ? (
      // Display video if the "video" key exists and is not empty
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
        <video
          controls
          className="w-full h-full object-cover rounded-lg shadow-lg"
        >
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ) : (
      // Display fallback message if the "video" key is empty
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
        <p className="text-lg md:text-2xl font-semibold text-gray-500">
          Vidéo en cours de réalisation
        </p>
      </div>
    )
  ) : Object.keys(project.images).length > 1 ? (
    // Display carousel if there are more than 1 image and no video
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="absolute w-full h-full"
      >
        <img
          src={Object.values(project.images)[currentSlide].src}
          alt={Object.values(project.images)[currentSlide].alt || `Image ${currentSlide + 1}`}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-0 h-full w-10 md:w-12 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-3xl hover:bg-opacity-70"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-0 h-full w-10 md:w-12 flex items-center justify-center bg-black bg-opacity-50 text-white text-2xl md:text-3xl hover:bg-opacity-70"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  ) : (
    // Display fallback message if there is only one image and no video
    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-200 rounded-lg shadow-lg">
      <p className="text-lg md:text-2xl font-semibold text-gray-500">
        Vidéo en cours de réalisation
      </p>
    </div>
  )}
</div>
</div>
  );
}