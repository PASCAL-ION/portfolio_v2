import { motion } from "framer-motion";
import { useState } from "react";

export function AboutPro() {
  const webPath = [
    "Autodidacte",
    "OpenclassRooms",
    "Piscine 42",
    "Web@cademie by Epitech (actuellement)",
  ];

  const skills = [
    { name: "JavaScript", logo: "/assets/techLogos/javascript.png" },
    { name: "PHP", logo: "/assets/techLogos/php.png" },
    { name: "MySQL", logo: "/assets/techLogos/mysql.png" },
    { name: "React", logo: "/assets/techLogos/react.png" },
    { name: "TailwindCSS", logo: "/assets/techLogos/tailwindcss.png" },
    { name: "Trello", logo: "/assets/techLogos/trello.png" },
    { name: "NodeJS", logo: "/assets/techLogos/nodejs.png" },
    { name: "C", logo: "/assets/techLogos/c.png" },
  ];

  const [clickedSkill, setClickedSkill] = useState(null);
  const [isHovered, setIsHovered] = useState(null);

  const handleSkillClick = (skillName) => {
    setClickedSkill((prev) => (prev === skillName ? null : skillName));
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-10 p-10">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="w-1/2">
          <img
            src="/assets/mePro.jpeg"
            alt="Photo professionnelle"
            className="w-full rounded-lg shadow"
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-2xl">Mon parcours dans le web</div>
          <div className="flex flex-col relative items-center w-1/2">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-0 transform -translate-x-1/2 w-1 bg-gray-400"
            ></motion.div>

            {webPath.map((step, index) => (
              <div key={index} className="flex items-center my-5 w-full">
                <div className="relative flex justify-start -translate-x-1/2">
                  <div className="w-4 h-4 bg-white rounded-full border"></div>
                </div>
                <div className="w-1/2 text-lg font-semibold">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-3/4 text-center mt-10">
        <h2 className="text-3xl font-bold">À propos de moi</h2>
        <p className="text-lg mt-4">
          Passionné par le développement web, je suis une personne curieuse et
          avide d'apprentissage. Toujours en quête de nouveaux défis, je cherche
          à approfondir mes connaissances et à développer des solutions
          innovantes. Mon parcours m'a permis d'acquérir une solide base en
          programmation et de travailler sur divers projets collaboratifs.
        </p>
      </div>

      <div className="w-full text-center mt-10">
        <h2 className="text-3xl font-bold">Compétences</h2>
          <motion.div className="flex flex-wrap justify-center gap-2 py-6 px-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="h-[150px] w-[150px] border text-lg shadow bg-black hover:bg-white hover:text-black flex flex-col items-center justify-center relative"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleSkillClick(skill.name)}
                onMouseEnter={() => setIsHovered(skill.name)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.div
                  className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-500 ease-in-out"
                  initial={{ opacity: 1, rotate: 0 }}
                  animate={{
                    opacity:
                      isHovered === skill.name || clickedSkill === skill.name
                        ? 0
                        : 1,
                    rotate:
                      isHovered === skill.name || clickedSkill === skill.name
                        ? 15
                        : 0,
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    rotate: { duration: 0.5 },
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-1/2 object-contain"
                  />
                </motion.div>

                <motion.div
                  className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center transition-opacity duration-500 ease-in-out"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity:
                      isHovered === skill.name || clickedSkill === skill.name
                        ? 1
                        : 0,
                  }}
                  transition={{ opacity: { duration: 0.5 } }}
                >
                  <span className="text-xl">{skill.name}</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
      </div>
    </div>
  );
}
