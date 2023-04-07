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
import {
  getAdProducts,
  getBlogPosts,
} from "../../../../store/Blog/getData/BlogGetDataAction";
const BHeader = () => {
  const location = useRouter();
  const isDark = useSelector((state) => state.blogUi.isDark);
  const sub = useSelector((state) => state.blogUi.blogSub);
  const subsClass = useSelector((state) => state.blogUi.subsClass);

  const dispatchPosts = useDispatch();
  const dispatchAdProducts = useDispatch();
  const dispatchSub = useDispatch();
  const dispatchSubClass = useDispatch();
  const path = location.pathname;

  const [showMiniSearch, setShowMiniSearch] = useState(false);
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const toggleMiniSeachHandler = () => {
    setShowMiniSearch((prev) => !prev);
  };
  useEffect(() => {
    dispatchPosts(getBlogPosts());
    dispatchAdProducts(getAdProducts());
  }, [dispatchPosts, dispatchAdProducts]);

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
      dispatchSub(blogUiAction.setBlogSub("coffee"));
      return;
    }
    if (path.includes("/blog/drink")) {
      dispatchSub(blogUiAction.setBlogSub("drink"));
      return;
    }
    if (path.includes("/blog/tools")) {
      dispatchSub(blogUiAction.setBlogSub("tools"));
      return;
    }
    if (path.includes("/blog/news")) {
      dispatchSub(blogUiAction.setBlogSub("news"));
      return;
    }
    dispatchSub(blogUiAction.setBlogSub(null));
  }, [location, dispatchSub, path]);

  useEffect(() => {
    switch (sub) {
      case "coffee":
        dispatchSubClass(
          blogUiAction.setSubsClass(isDark ? "Dcoffee coffee" : "coffee")
        );
        break;
      case "drink":
        dispatchSubClass(
          blogUiAction.setSubsClass(isDark ? "Ddrink drink" : "drink")
        );
        break;
      case "tools":
        dispatchSubClass(
          blogUiAction.setSubsClass(isDark ? "Dtools tools" : "tools")
        );
        break;
      case "news":
        dispatchSubClass(
          blogUiAction.setSubsClass(isDark ? "Dnews news" : "news")
        );
        break;
      default:
        dispatchSubClass(blogUiAction.setSubsClass(""));
        break;
    }
  }, [isDark, sub, dispatchSubClass]);

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
