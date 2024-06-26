import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AppContext } from "../store/Context";
import { useContext } from "react";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useContext(AppContext);
  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
