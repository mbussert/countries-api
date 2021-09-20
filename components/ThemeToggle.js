import React, { useEffect, useState } from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";

function ThemeToggle() {
  function onClick() {
    console.log("Clicked");
  }

  return (
    <button className="m-5 flex" onClick={() => onClick()}>
      <HiOutlineMoon className="text-veryDarkBlueText" />
      <h2 className="px-2 text-sm font-semibold text-veryDarkBlueText">
        Dark Mode
      </h2>
    </button>
  );
}

export default ThemeToggle;
