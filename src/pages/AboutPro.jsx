import { motion } from "framer-motion";
import { Skill } from "../components/Skill";

export function AboutPro() {
  const skills = [
    {techno : "Javascript", hover : "hover:bg-yellow-500 hover:text-black"},
    {techno : "Php", hover : "hover:bg-purple-500 hover:text-black"},
    {techno : "MySQL", hover : "hover:bg-yellow-500"},
    {techno : "React", hover : "hover:bg-yellow-500"},
    {techno : "Tailwind", hover : "hover:bg-yellow-500"},
  ]
  return (
    <div className="w-full h-full px-[20px] pt-[20px] flex flex-col gap-[40px] items-start">
      <div className="w-[200px] h-[200x] relative">
        <img src="./src/assets/imgPro.jpg" alt="" className="w-full h-full"/>
        <h1 className="absolute -bottom-[30px] -right-[20px] w-2/3 bg-stone-800 py-[10px] px-[10px]">Developpeur Web</h1>
      </div>
      <p className="mt-[50px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos at commodi rem sunt, earum quisquam libero, qui molestias doloribus, ipsum voluptatum excepturi quos. Vel commodi sapiente ab veritatis ut!
      Id exercitationem expedita velit vero dolor laborum, necessitatibus quam quis quidem nisi sapiente, voluptates soluta facere dolores magnam fugiat pariatur eveniet error molestias! Dolor similique quisquam ad magnam laborum ipsam?</p>
      <h2 className="text-4xl">Mes Compétences</h2>
      <div className="flex gap-[10px] flex-wrap">
        {skills.map(skill => {
          return <Skill skillName={skill["techno"]} hover={skill["hover"]}/>
        })}
      </div>
    </div>
  );
}