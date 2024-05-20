import React from 'react'
import { useNavigate } from 'react-router-dom'


export const MainHome = () => {

    const navigate = useNavigate();

  return (
    <div className='mainHome'>
        <button onClick={() => navigate("/Quran")}>Read Quran</button>
        <button onClick={() => navigate("/hadith")}>Read Hadith</button>
        <h1 className="fariha-message">Fariha If you are seeing this please activate your Twitter or create a new Twitter please please please, you know I'm feeling suffocated</h1>
    </div>
  )
}
