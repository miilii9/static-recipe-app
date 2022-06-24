import React from "react";
import useTheme from "../hooks/useTheme";
import darkicon from "../assets/icons/nightlight_round_black_24dp.svg";
import { useState } from "react";
export default function Color() {
  const colors = ["blue", "red", "purple"];
  const { changeColor, changeMode, mode } = useTheme();
  const toggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light");
  };
  console.log(mode);
  return (
    <div className='colrs'>
      <img
        src={darkicon}
        alt='switch'
        onClick={toggleMode}
        style={{ filter: mode == "dark" ? "invert(100%)" : "" }}
      />
      <div>
        {colors.map((col) => (
          <div
            className='col-btn'
            style={{ background: col }}
            onClick={() => changeColor(col)}
            key={col}
          />
        ))}
      </div>
    </div>
  );
}
