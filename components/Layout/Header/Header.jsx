import React from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Log from "./components/Log";
import Basket from "./components/Basket";
import NavLinks from "./components/NavLinks";
import { useSession } from "next-auth/react";
import Profile from "./components/Profile";
import HambergerMenu from "./components/HambergerMenu";
const Header = () => {
  const { data: session, status } = useSession();

  return (
    <header className="header">
      <div className="header-container">
        <HambergerMenu />
        <Logo />
        <Search />
        <div className="header-basketAndProfile">
          {status === "unauthenticated" && <Log />}
          {status === "authenticated" && <Profile />}
          <Basket />
        </div>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
