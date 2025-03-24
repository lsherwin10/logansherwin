import { ReactLenis } from "lenis/react";
import "./App.css";

import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Header } from "./components/Header";

function App() {
  return (
    <ReactLenis
      root
      className="min-h-screen transition-opacity duration-700 bg-black text-gray-100"
    >
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </ReactLenis>
  );
}

export default App;
