import React from 'react'

export function Skill({skillName, hover}) {
  return (
    <div className={`${hover}`}>/{skillName}/</div>
  )
}
