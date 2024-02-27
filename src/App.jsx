
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { VerseDetail } from "./pages/VerseDetail";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/:suranNumber" element={<VerseDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
