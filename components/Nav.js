import buttonlist from "../utils/buttonlist.js";
import toggle from "../utils/darkmode.js";

import ModeNightIcon from "@mui/icons-material/ModeNightOutlined";

const Nav = () => {
  return (
    <header className="fixed w-full h-16 px-44 flex items-center justify-between font-title backdrop-blur">
      <h1 className="font-bold">KHum</h1>

      <nav className="flex">
        <ul className="flex justify-between align-middle font-medium mr-5">
          {buttonlist.map((button) => (
            <li key={button.key} className="p-2.5 text-opacity-85">
              {
                <a
                  href={button.link}
                  className="hover:text-cherry dark:hover:text-coral"
                >
                  {button.title}
                </a>
              }
            </li>
          ))}
        </ul>

        <button
          onClick={toggle}
          className="p-2.5 rounded-md hover:bg-golden dark:hover:bg-coral"
        >
          <ModeNightIcon />
        </button>
      </nav>
    </header>
  );
};

export default Nav;
