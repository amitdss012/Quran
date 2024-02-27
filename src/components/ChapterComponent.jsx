import React from 'react'
import "./quran.css"

export const ChapterComponent = ({number, chapterName, chapterInEnglish, surahNumber, NumberOFayat, onclickNavigate }) => {
  return (
    <>
    <div className='chapter btn-grad' onClick={onclickNavigate}>
        <div className='chapterNumber'>
          <h2>{number}</h2>
          <div className='chapterName'>
            <h3>{chapterName}</h3>
            <span>{chapterInEnglish}</span>
          </div>
        </div>

        <div className='ayat'>
            <h3>Surah {surahNumber}</h3>
            <p>{NumberOFayat} ayat</p>
        </div>
    </div>
    </>
  )
}
