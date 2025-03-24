import { Dispatch, SetStateAction, useEffect } from "react";

export const Navbar: React.FC<{
  navOpen: boolean;
  setNavOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ navOpen, setNavOpen }) => {
  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
  }, [navOpen]);

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          <div
            className={`md:flex items-center space-x-4 ${
              navOpen ? "" : "hidden"
            }`}
          >
            <MenuLink href="#home" setNavOpen={setNavOpen}>
              Home
            </MenuLink>

            <MenuLink href="#about" setNavOpen={setNavOpen}>
              About
            </MenuLink>

            <MenuLink href="#projects" setNavOpen={setNavOpen}>
              Projects
            </MenuLink>

            <MenuLink href="#contact" setNavOpen={setNavOpen}>
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
  setNavOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}> = ({ href, setNavOpen, children }) => {
  return (
    <a
      href={href}
      className="grid items-center h-9 px-4 text-sm font-medium tracking-wide text-zinc-50/50 hover:text-zinc-50 transition-colors"
      onClick={() => setNavOpen(false)}
    >
      {children}
    </a>
  );
};
