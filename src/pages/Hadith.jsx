import React from 'react'
import { AlllHadith } from '../components/AlllHadith'
import useQuran from '../API/quran'

export const Hadith = () => {

  const {aayat, loading , error} = useQuran("https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions.json")

  console.log(aayat)
  return (
    <>
    <AlllHadith />
    </>
  )
}
