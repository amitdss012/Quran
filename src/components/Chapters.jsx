import useQuran, { API } from "../API/quran";
import { ChapterComponent } from "./ChapterComponent";
import { useNavigate } from "react-router-dom";
import "./quran.css";

export const Chapters = () => {
  const { aayat, loading, error } = useQuran(API);

  const navigate = useNavigate();

  if (loading) {
    return <h1>loading.................</h1>;
  }

  if (error) {
    return <h1>something went wrong</h1>;
  }

  return (
    <>
      {aayat.data.surahs.map((chapter) => {
        return (
          <ChapterComponent
            onclickNavigate={() => navigate(`/${chapter.number}`)}
            key={chapter.number}
            number={chapter.number}
            chapterName={chapter.englishName}
            chapterInEnglish={chapter.name}
            surahNumber={chapter.number}
            NumberOFayat={chapter.ayahs.length}
          />
        );
      })}
    </>
  );
};
