import React from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Log from "./components/Log";
import Basket from "./components/Basket";
import NavLinks from "./components/NavLinks";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Search />
        <Log />
        <Basket />
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
