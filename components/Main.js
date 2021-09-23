import React from "react";
import CountyCard from "./CountyCard";
import SearchInput from "./SearchInput";

function Main() {
  return (
    <div className="px-5 pt-6">
      <SearchInput />
      <CountyCard />
    </div>
  );
}

export default Main;
