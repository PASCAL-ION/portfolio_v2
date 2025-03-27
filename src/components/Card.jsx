export function Card({projectDetails}) {
  return (
    <div className="h-auto flex flex-col gap-3">
        <img src={projectDetails.images.img1} alt="image d'accueil projet twitter"/>
        <div className="text-lg">{projectDetails.name}</div>
        <div>{projectDetails.description}</div>
    </div>
  )
}
