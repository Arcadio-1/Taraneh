import React from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Log from "./components/Log";
import Basket from "./components/Basket";
import NavLinks from "./components/NavLinks";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();
  // console.log(session);
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
