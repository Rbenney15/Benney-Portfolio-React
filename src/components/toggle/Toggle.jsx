import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const darkMode = state.darkMode;

  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <button
      type="button"
      className="t"
      onClick={handleToggle}
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={darkMode}
      title={darkMode ? "Light mode" : "Dark mode"}
    >
      <span className="t-icons" aria-hidden="true">
        <img src={Sun} alt="" className="t-icon" />
        <img src={Moon} alt="" className="t-icon" />
      </span>

      <span className={`t-knob ${darkMode ? "is-dark" : "is-light"}`} />
    </button>
  );
};

export default Toggle;
