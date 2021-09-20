import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <div className="flex justify-between py-2 shadow-md">
      <h1 className="font-extrabold m-5 text-sm text-veryDarkBlueText">
        Where in the world?
      </h1>
      <ThemeToggle />
    </div>
  );
}

export default Header;
