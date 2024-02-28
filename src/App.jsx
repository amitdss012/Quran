
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerseDetail } from "./pages/VerseDetail";
// import { Hadith } from "./pages/Hadith";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/:suranNumber" element={<VerseDetail />} />
            <Route path="/hadith" element={<Hadith />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
