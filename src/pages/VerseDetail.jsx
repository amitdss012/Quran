// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import useQuran from "../API/quran";
// import { Verse } from "../components/Verse";

// export const VerseDetail = () => {
//   const params = useParams();
//   const [translation, setTranslation] = useState("en.asad");

//   const { aayat, loading, error } = useQuran(
//     `http://api.alquran.cloud/v1/surah/${params.suranNumber}/${translation}`
//   );

//   if (loading) {
//     return <h1>loading................</h1>;
//   }

//   const handleTranslationChange = (translationCode) => {
//     setTranslation(translationCode);
//   };

//   return (
//     <>
//       <div className="versePage">
//         <h1>Surah {params.suranNumber}</h1>
//         <h1 className="arbicName">{aayat.data.name}</h1>
//         <p className="by">
//           Translated by{" "}
//           <span className="translaterName">
//             {aayat.data.edition.englishName}
//           </span>
//         </p>

//         <div className="languageButtons">
//           <button onClick={() => handleTranslationChange("hi.hindi")}>
//             Hindi
//           </button>
//           <button onClick={() => handleTranslationChange("en.asad")}>
//             English
//           </button>
//           <button onClick={() => handleTranslationChange("ar.muyassar")}>
//             Arabic
//           </button>
//         </div>

//         {aayat.data.ayahs.map((ayat) => {
//           return (
//             <Verse
//               key={ayat.number}
//               chapterNumber={params.suranNumber}
//               verseNumber={ayat.numberInSurah}
//               verse={ayat.text}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuran from "../API/quran";
import { Verse } from "../components/Verse";

export const VerseDetail = () => {
  const params = useParams();
  const [translation, setTranslation] = useState("en.asad");
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");


  const { aayat, error } = useQuran(
    `https://api.alquran.cloud/v1/surah/${params.suranNumber}/${translation}`
  );

  // Effect to set loading state based on useQuran loading
  useEffect(() => {
    setLoading(true); // Set loading state to true when data fetching starts
  }, [translation]); // Watch for changes in translation

  // Effect to update loading state when data fetching is complete
  useEffect(() => {
    setLoading(false); // Set loading state to false when data fetching completes
  }, [aayat]); // Watch for changes in aayat and error

  
  const handleTranslationChange = (translationCode) => {
    setTranslation(translationCode);
    setSelectedLanguage(translationCode); // Set the selected language
  };

  return (
    <>
      <div className="versePage">
        <h1>Surah {params.suranNumber}</h1>
        <h1 className="arbicName">{aayat?.data?.name}</h1>
        <p className="by">
          Translated by{" "}
          <span className="translaterName">
            {aayat?.data?.edition.englishName}
          </span>
        </p>

        <div className="languageButtons">
          <button onClick={() => handleTranslationChange("hi.hindi")}>
            Hindi
          </button>
          <button onClick={() => handleTranslationChange("en.asad")}>
            English
          </button>
          <button onClick={() => handleTranslationChange("ur.ahmedali")}>
            Urdu
          </button>

          <select
            className="arabic-option"
            value={selectedLanguage}
            onChange={(e) => handleTranslationChange(e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="ar.muyassar">Arabic 1</option>
            <option value="quran-simple">Arabic 2</option>
            <option value="ar.muhammadayyoub">Arabic 3</option>
            <option value="ar.qurtubi">Arabic 4</option>
            <option value="ar.jalalayn">Arabic 5</option>
            <option value="ar.abdulbasitmurattal">Arabic 6</option>
            <option value="ar.abdullahbasfar">Arabic 7</option>
          </select>
        </div>

        {loading ? (
          <h1>Loading...</h1> // Display loading indicator while loading is true
        ) : (
          aayat?.data?.ayahs.map((ayat) => (
            <Verse
              key={ayat.number}
              chapterNumber={params.suranNumber}
              verseNumber={ayat.numberInSurah}
              verse={ayat.text}
              loading={loading} // Pass loading state to Verse component
            />
          ))
        )}
      </div>
    </>
  );
};
