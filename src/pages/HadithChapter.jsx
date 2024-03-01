import React from "react";
import { useParams } from "react-router-dom";
import "../components/quran.css"
import useQuran from "../API/quran";
import { Verse } from "../components/Verse";

export const HadithChapter = () => {
  const params = useParams();
  const {aayat, loading, error} = useQuran(`https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${params.hadithBook}.json`)

  console.log(aayat.hadiths)

  if(loading){
    return <h1>Loading.....</h1>

    if(error){
      return <h1>something went wrong</h1>
    }
  }
  return (
    <>
    <div className="hadithChapter">
      <h1>{params.hadithBook}</h1>

      {
        aayat.hadiths.map((hadith) => {
          return(
            <Verse key={hadith.hadithnumber} chapterNumber={hadith.reference.book} verseNumber={hadith.reference.hadith} verse={hadith.text} />
          )
        })
      }
    </div>
    </>
  );
};
