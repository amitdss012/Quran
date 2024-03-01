import React from 'react'

export const HadithComponent = ({hadithName, arabicName, handleNavigate}) => {
  return (
    <>
    <div className='hadithName' onClick={handleNavigate}>
        <p>{hadithName}</p>
        <p>{arabicName}</p>
      </div>
    </>
  )
}
