import React from 'react'
import "./quran.css"

export const HadithComp = ({hadithName}) => {
  return (
    <>
    <div className='hadithName'>
        <p>{hadithName}</p>
    </div>
    </>
  )
}
