import { useState } from "react";
import { Navbar } from "./Navbar";

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between
      items-center md:px-6"
      >
        <h1>
          <a href="/" className="logo">
            <img src="vite.svg" width={40} height={40} alt="Logan Sherwin" />
          </a>
        </h1>

        <div className="relative md:justify-self-center">
          <button
            className="w-10 h-10 grid place-items-center bg-zinc-50/10 rounded-xl
            ring-inset ring-1 ring-zinc-50/[0.02] backdrop-blur-2xl
            hover:bg-zinc-50/15 transition-[transform,background-color]
            active:scale-95 md:hidden cursor-pointer"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>

          <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
      </div>
    </header>
  );
};
