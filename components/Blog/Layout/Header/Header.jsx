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
  const subsClass = useSelector((state) => state.blogUi.subsClass);

  const dispatch = useDispatch();
  const path = location.pathname;

  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMiniSeachHandler = () => {
    setShowMiniSearch((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
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
  }, [location, dispatch, path]);

  useEffect(() => {
    switch (sub) {
      case "coffee":
        dispatch(
          blogUiAction.setSubsClass(isDark ? "Dcoffee coffee" : "coffee")
        );
        break;
      case "drink":
        dispatch(blogUiAction.setSubsClass(isDark ? "Ddrink drink" : "drink"));
        break;
      case "tools":
        dispatch(blogUiAction.setSubsClass(isDark ? "Dtools tools" : "tools"));
        break;
      case "news":
        dispatch(blogUiAction.setSubsClass(isDark ? "Dnews news" : "news"));
        break;
      default:
        dispatch(blogUiAction.setSubsClass(""));
        break;
    }
  }, [isDark, sub, dispatch]);

  return (
    <header
      className={`BHeader ${
        isDark && subsClass === "" ? "dark" : ""
      } ${subsClass} ${visible ? "BHeaderVisible" : "BHeaderHidden"}`}
    >
      <div
        className={
          showMiniSearch
            ? "BHeader-container gridWithSearch"
            : "BHeader-container"
        }
      >
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
