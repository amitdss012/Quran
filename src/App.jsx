
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerseDetail } from "./pages/VerseDetail";
import { Hadith } from "./pages/Hadith";
import { HadithChapter } from "./pages/HadithChapter";
import { MainHome } from "./pages/MainHome";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/quran" element={<Home />} />
            <Route path="/:suranNumber" element={<VerseDetail />} />
            <Route path="/hadith" element={<Hadith />} />
            <Route path="/hadith/:hadithBook" element={<HadithChapter />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
