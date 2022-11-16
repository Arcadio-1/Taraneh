import React from "react";
import SearchIcon from "../../../ui/Icons/SearchIcon";
const Search = () => {
  return (
    <div className="header-search">
      <button className="header-search-searchBtn">
        <SearchIcon />
      </button>
      <input
        className="header-search-input"
        placeholder="جستجو در کافه ترانه"
        type="text"
        id="search"
      />
    </div>
  );
};

export default Search;
