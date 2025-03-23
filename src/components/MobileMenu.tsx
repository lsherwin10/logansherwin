import { Dispatch, SetStateAction } from "react";
import { menuBg } from "./common";

export const MobileMenu: React.FC<{
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full ${menuBg} z-40 flex flex-col items-center justify-center
                         transition-all duration-300 ease-in-out
                         ${
                           menuOpen
                             ? "h-screen opacity-100 pointer-events-auto"
                             : "h-0 opacity-0 pointer-events-none"
                         }
                       `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <MenuLink
        href="#home"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </MenuLink>

      <MenuLink
        href="#about"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        About
      </MenuLink>

      <MenuLink
        href="#projects"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </MenuLink>

      <MenuLink
        href="#contact"
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </MenuLink>
    </div>
  );
};

const MenuLink: React.FC<{
  href: string;
  onClick: () => void;
  menuOpen: boolean;
  children: React.ReactNode;
}> = ({ href, onClick, menuOpen, children }) => (
  <a
    href={href}
    className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
      menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
    }`}
    onClick={onClick}
  >
    {children}
  </a>
);
