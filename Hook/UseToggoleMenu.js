import { useEffect, useRef, useState } from "react";

const useToggleMenu = () => {
  const [isShowMenu, setIshShowMenu] = useState(false);
  const menuRef = useRef();

  const showMenuHandler = () => {
    setIshShowMenu((prev) => (prev = !prev));
  };

  useEffect(() => {
    const closeOpenMenus = (e) => {
      if (
        menuRef.current &&
        isShowMenu &&
        !menuRef.current.contains(e.target)
      ) {
        setIshShowMenu(false);
      }
    };
    document.addEventListener("click", closeOpenMenus);
  }, [isShowMenu]);
  return { isShowMenu, menuRef, showMenuHandler };
};

export default useToggleMenu;
