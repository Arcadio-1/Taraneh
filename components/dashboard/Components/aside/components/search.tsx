import React from "react";
import SearchIcon from "../../../../ui/Icons/SearchIcon";
const Search = () => {
  return (
    <div className="aside-header-search">
      <form className="aside-header-search-form">
        <input
          className="aside-header-search-input"
          placeholder="جستجو کالا  "
          type="text"
          id="search"
        />
        <button className="aside-header-search-searchBtn" type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
