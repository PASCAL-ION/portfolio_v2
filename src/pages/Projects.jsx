import { Card } from "../components/Card";
import { useState, useEffect } from "react";

export function Projects() {
  const [data, setData] = useState([])
    useEffect(() => {
        fetch("projects.json").then(
            (res) => res.json()
        ).then(
            (data) => {
                setData(data)
            }
        )
    }, [])
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex md:flex-row justify-around items-center">
        <h1 className="md:text-8xl text-6xl text-center">Projets</h1>
        <h2 className="md:text-3xl text-2xl text-center md:w-[50%]">Decouvrez ici le travail que j'ai pu faire durant mon parcours de formation</h2>
      </div>
      <div className="p-10 grid grid-cols-2 gap-8">
        {
          data && data.length>0 && data.map((project)=> <Card key={project.id} projectDetails={project}/>)
        }
      </div>
    </div>
  )
}