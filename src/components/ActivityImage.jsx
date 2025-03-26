import React from 'react'

export function ActivityImage(src, gridArea) {
  return (
    <div className={`${gridArea}`}>
        <img src={src} alt="" className='w-[30%] h-[20px] bg-stone-200'/>
    </div>
  )
}
