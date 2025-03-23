import { Dispatch, SetStateAction, useEffect } from "react";
import { menuBg } from "./common";

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Navbar: React.FC<Props> = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-40 ${menuBg} backdrop-blur-lg border-b border-white/10 shadow-lg`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            logan<span className="text-blue-500">.tech</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <MenuLink href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </MenuLink>

            <MenuLink href="#about" onClick={() => setMenuOpen(false)}>
              About
            </MenuLink>

            <MenuLink href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </MenuLink>

            <MenuLink href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </MenuLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

const MenuLink: React.FC<{
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ href, onClick, children }) => {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );
};
