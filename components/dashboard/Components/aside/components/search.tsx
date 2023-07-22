import React from "react";
import SearchIcon from "../../../../ui/Icons/SearchIcon";
const Search = () => {
  return (
    <div className="max-w-sm m-auto pt-2">
      <div className="aside-header-search">
        <button className="aside-header-search-searchBtn">
          <SearchIcon />
        </button>
        <input
          className="aside-header-search-input leading-10"
          placeholder="جستجو کالا  "
          type="text"
          id="search"
        />
      </div>
    </div>
    // <div className="dASide-header-search">
    //   <SearchIcon />
    //   <input type="text" placeholder="جستجو" />
    // </div>
  );
};

export default Search;
