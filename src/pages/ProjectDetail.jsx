import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

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

  const settings = {
    dots: true,               
    infinite: true,          
    speed: 500,             
    slidesToShow: 1,          
    slidesToScroll: 1,       
    autoplay: false,          
    autoplaySpeed: 3000,      
    cssEase: "ease-in-out",
    prevArrow: (
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black p-3 rounded-full cursor-pointer hover:bg-gray-700">
        ❮
      </div>
    ),
    nextArrow: (
      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black p-3 rounded-full cursor-pointer hover:bg-gray-700">
        ❯
      </div>
    ), 
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-10">
      <div className="flex h-[50vh] w-full gap-10">
        <div className="flex-1 flex flex-col items-start gap-8 justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-9xl font-bold"
          >
            {project.name}
          </motion.h1>
          <div className="flex gap-5">
            <Link
              to={project.links.github || "#"}
              className={`px-8 py-2 bg-gray-200 rounded-full text-black text-2xl ${!project.links.github ? "text-gray-400 cursor-not-allowed" : ""}`}
              onClick={(e) => !project.links.github && e.preventDefault()}
            >
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            {!project.links.github && (
              <p className="text-sm italic text-gray-500 mt-2">
                Bientôt disponible...
              </p>
            )}

            <Link
              to={project.links.live || "#"}
              className={`px-8 py-2 bg-gray-200 rounded-full text-black text-2xl ${!project.links.live ? "text-gray-400 cursor-not-allowed" : ""}`}
              onClick={(e) => !project.links.live && e.preventDefault()}
            >
              <FontAwesomeIcon icon={faGlobe} />
            </Link>

            {!project.links.live && (
              <p className="text-sm italic text-gray-500 mt-2">
                Bientôt disponible...
              </p>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-between gap-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full overflow-hidden rounded-xl"
          >
            <img
              src={`${project.images.img1.src}`}
              alt="image de la page d'accueil du projet"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg w-1/2 italic text-right"
          >
            {project.shortDescription}
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="flex flex-wrap justify-center gap-4 md:py-10"
      >
        {project.stack.map((tech, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 bg-gray-200 rounded-full text-black text-sm"
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
          className="text-2xl font-semibold pb-8"
        >
          {project.description}
        </motion.h2>
      </div>

      <div className="w-full mt-10">
        <Slider {...settings}>
          {Object.values(project.images).map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt || `Image ${index + 1}`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
