import React from "react";
import { HiSearch } from "react-icons/hi";

function SearchInput() {
  return (
    <div>
      <form className="pt-0 relative mx-auto shadow-md">
        <button type="submit" className="absolute left-3 top-0 mt-5 pl-5">
          <HiSearch className="text-darkGrayInput text-xl" />
        </button>
        <input
          type="text"
          className="w-full bg-white h-14 px-20 rounded-lg text-sm focus:outline-none"
          placeholder="Search for a country..."
        ></input>
      </form>
    </div>
  );
}

export default SearchInput;
