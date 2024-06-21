import React from 'react'
import { useNavigate } from 'react-router-dom'


export const MainHome = () => {

    const navigate = useNavigate();

  return (
    <div className='mainHome'>
        <button onClick={() => navigate("/Quran")}>Read Quran</button>
        <button onClick={() => navigate("/hadith")}>Read Hadith</button>
    </div>
  )
}
