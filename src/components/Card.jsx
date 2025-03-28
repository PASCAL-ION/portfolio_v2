import { Link } from "react-router-dom";
import { motion } from "motion/react";

export function Card({ projectDetails }) {
  return (
    <Link to={`/projects/${projectDetails.id}`} className="flex flex-col gap-2 overflow-hidden">
      <motion.img 
        src={projectDetails.images.img1.src} 
        alt={projectDetails.images.img1.alt} 
        className={`flex-1 object-cover transition-all duration-300 hover:scale-110`}
      />
      <div className="text-base">{projectDetails.name}</div>
    </Link>
  );
}
