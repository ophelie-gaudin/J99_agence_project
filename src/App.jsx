import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.index";
import Home from "./pages/Home/Home.index";
import About from "./pages/About";
import Works from "./pages/Works/Works.index";
import StudyCase from "./pages/Works/works-components/StudyCase/StudyCase.index";

//CONTEXT
import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
} from "react";

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

// AppWrapper
const Layout = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="min-h-[100vh] w-full" style={theme}>
      <Navbar />
      <ThemeSwitcher />
      {props.children}
    </div>
  );
};

const ThemeSwitcher = () => {
  const ctxValue = useContext(ThemeContext);

  console.log("ctxValue", ctxValue);
  return (
    <>
      <button
        onClick={ctxValue.toggleTheme}
        className="border border-black p-1 rounded-xl text-sm"
      >
        Changer le theme ({ctxValue.themeName})
      </button>

      {/* <div>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label for="checkbox" className="label">
          <span className="fas fa-moon">
            <FaMoon />
          </span>
          <span className="fas fa-sun"></span>
          <div className="ball"></div>
        </label>
      </div> */}
    </>
  );
};

function App() {
  const [themeName, setThemeName] = useState("light");

  // Fonction du composant parent que l'on va passer pour changer le contexte à travers setThemeName
  //useCallback permet de stocker une fonction dans le cache pour l'appeler plus tard
  const toggleTheme = useCallback(() => {
    console.log("toggling theme");
    setThemeName((t) => (t === "light" ? "dark" : "light"));
    // const element = document.body;
    // element.style = theme;
  }, []);

  // Etat initial du Provider
  const contextValue = useMemo(() => {
    return {
      theme: themeName === "light" ? THEMES.light : THEMES.dark,
      themeName,
      toggleTheme,
    };
  }, [toggleTheme, themeName]);

  // Composant ThemeSwitcher

  return (
    <ThemeContext.Provider value={contextValue}>
      <BrowserRouter>
        <Layout>
          <main className="p-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />}></Route>

              {/* ci dessous des routes imbriquées ET dynamiques */}
              <Route path="/works" element={<Works />}>
                <Route path=":studyCaseSlug" element={<StudyCase />} />
                {/* Dans "works", Outlet permettra d'afficher le composant studyCase qui correspondra à la studyCaseSlug */}
              </Route>

              {/* ci dessous juste une route dynamique (avec les : qui précèdent la partie variable) */}
              {/* <Route path="/profil/:id" element={<Profile />} /> */}
            </Routes>
          </main>
        </Layout>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
