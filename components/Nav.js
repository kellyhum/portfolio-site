import buttonlist from "../utils/buttonlist.js";
import toggle from "../utils/darkmode.js";

import { MdOutlineDarkMode } from 'react-icons/md';
import { IconContext } from "react-icons";

const Nav = () => {
  return (
    <header className="fixed w-full h-16 px-44 flex items-center justify-between font-title backdrop-blur">
      <h1 className="font-bold">KHum</h1>

      <nav className="flex">
        <ul className="flex justify-between align-middle font-medium mr-5">
          {buttonlist.map((button) => (
            <li key={button.key} className="py-1 px-2 m-1.5 rounded-md transition-colors hover:bg-golden dark:hover:bg-dark-gold">
              {
                <a
                  href={button.link}
                >
                  {button.title}
                </a>
              }
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          className="p-2.5 rounded-md transition-colors hover:bg-coral dark:hover:bg-green"
          aria-label="Dark Mode Button"
        >
          <IconContext.Provider value={{ size:'1.5rem' }}>
            <MdOutlineDarkMode/>
          </IconContext.Provider>
        </button>
      </nav>
    </header>
  );
};

export default Nav;
