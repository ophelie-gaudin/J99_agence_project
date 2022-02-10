import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.index";
import Home from "./pages/Home/Home.index";
import About from "./pages/About";
import Works from "./pages/Works/Works.index";
import StudyCase from "./pages/Works/works-components/StudyCase/StudyCase.index";

//CONTEXT
import { createContext } from "react";

const THEMES = {
  dark: {
    background: "#000",
    color: "#fff",
    border: "solid 1px #fff",
  },
  light: {
    background: "#fff",
    color: "#000",
    border: "solid 1px #000",
  },
};

// 1 - Création d'un contexte (ici un objet contenant une constante ET une fonction)
const ThemeContext = createContext({
  theme: THEMES.dark,
  toggleTheme: () => {},
});

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              {/* <Route path="tata" element={<div>Tata root hhhh</div>} />
              <Route path="toto" element={<div> toto hhhh</div>} /> */}
            </Route>

            {/* ci dessous des routes imbriquées ET dynamiques */}
            <Route path="/works" element={<Works />}>
              <Route path=":studyCaseSlug" element={<StudyCase />} />
            </Route>

            {/* ci dessous juste une route dynamique (avec les : qui précèdent la partie variable) */}
            {/* <Route path="/profil/:id" element={<Profile />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
