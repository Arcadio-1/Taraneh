import BSearch from "./Components/BSearch";
import BNavLinks from "./Components/BNavLinks";
import BThemSwitch from "./Components/BThemSwitch";
import Log from "../../../Layout/Header/components/Log";
import BlogMenu from "./Components/menu/BlogMenu";
import BsmSearch from "./Components/BsmSearch";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { blogUiAction } from "../../../../store/Blog/ui/blogUislice";
const BHeader = () => {
  const location = useRouter();
  const isDark = useSelector((state) => state.blogUi.isDark);
  const sub = useSelector((state) => state.blogUi.blogSub);
  //   useEffect(() => {
  //     console.log(sub);
  //   }, [sub]);

  const dispatch = useDispatch();
  let theClass = "";

  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMiniSeachHandler = () => {
    setShowMiniSearch((prev) => !prev);
  };

  const containerClass = showMiniSearch
    ? "BHeader-container gridWithSearch"
    : "BHeader-container";
  useEffect(() => {
    const handleScroll = () => {
      console.log("scroling");
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const cls = visible ? "BHeaderVisible" : "BHeaderHidden";
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("/blog/coffee")) {
      dispatch(blogUiAction.setBlogSub("coffee"));
      return;
    }
    if (path.includes("/blog/drink")) {
      dispatch(blogUiAction.setBlogSub("drink"));
      return;
    }
    if (path.includes("/blog/tools")) {
      dispatch(blogUiAction.setBlogSub("tools"));
      return;
    }
    if (path.includes("/blog/news")) {
      dispatch(blogUiAction.setBlogSub("news"));
      return;
    }
    dispatch(blogUiAction.setBlogSub(null));
  }, [location, dispatch]);

  switch (sub) {
    case "coffee":
      // console.log(sub);
      isDark ? (theClass = "Dcoffee coffee") : (theClass = "coffee");
      dispatch(blogUiAction.setSubsClass(theClass));
      break;
    case "drink":
      isDark ? (theClass = "Ddrink drink") : (theClass = "drink");
      dispatch(blogUiAction.setSubsClass(theClass));
      break;
    case "tools":
      isDark ? (theClass = "Dtools tools") : (theClass = "tools");
      dispatch(blogUiAction.setSubsClass(theClass));
      break;
    case "news":
      isDark ? (theClass = "Dnews news") : (theClass = "news");
      dispatch(blogUiAction.setSubsClass(theClass));
      break;
    default:
      theClass = "";
      dispatch(blogUiAction.setSubsClass(""));
      break;
  }

  const headerClass = isDark && theClass === "" ? "dark" : "";
  return (
    <header className={`BHeader ${headerClass} ${theClass} ${cls}`}>
      <div className={containerClass}>
        <BNavLinks
          onToggleMiniSearch={toggleMiniSeachHandler}
          miniSearchShowed={showMiniSearch}
        />
        <BSearch
          onToggleMiniSearch={toggleMiniSeachHandler}
          miniSearchShowed={showMiniSearch}
        />
        <BThemSwitch />
        <Log />
        <BlogMenu />
        {showMiniSearch && (
          <BsmSearch onToggleMiniSearch={toggleMiniSeachHandler} />
        )}
      </div>
    </header>
  );
};
export default BHeader;
