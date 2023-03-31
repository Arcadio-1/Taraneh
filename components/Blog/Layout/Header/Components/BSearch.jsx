import { Fragment } from "react";
import { useSelector } from "react-redux";
import SearchIcon from "../../../../ui/Icons/SearchIcon";
const BSearch = (props) => {
  const windowWidth = useSelector((state) => state.ui.windowWidth);
  return (
    <Fragment>
      {windowWidth > 450 && (
        <div className="BSearch">
          <Fragment>
            <label className="BSearch-label" htmlFor="search">
              <SearchIcon />
            </label>
            <input
              className="BSearch-input"
              type="text"
              placeholder="جستجو در کافه ترانه"
              id="search"
            />
          </Fragment>
        </div>
      )}
      {windowWidth < 450 && !props.miniSearchShowed && (
        <div className="BSearch" onClick={() => props.onToggleMiniSearch()}>
          <SearchIcon />
        </div>
      )}
    </Fragment>
  );
};
export default BSearch;
