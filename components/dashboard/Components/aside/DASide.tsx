import React, { useEffect, useState } from "react";
import List from "./components/list";
import { Status } from "../../../../Types/enums";
import { DashboardNavLinkList } from "../../Types/Types";
import Search from "./components/search";
import Logo from "./components/logo";
const DASide = () => {
  const [navLinks, setNavLinks] = useState<DashboardNavLinkList>([]);
  const [navLinksStatus, setGetNavLinksStatus] = useState<Status>(
    Status.loading
  );
  useEffect(() => {
    const getNavLinks = async () => {
      const request = await fetch("/api/dashboard/ui/getNavLinks", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      if (data && data.status === "success") {
        setNavLinks(data.links);
        setGetNavLinksStatus((prev) => {
          return (prev = Status.success);
        });
      }
      if (data && data.status === "error") {
        setNavLinks([]);
        setGetNavLinksStatus((prev) => {
          return (prev = Status.error);
        });
      }
    };
    getNavLinks();
  }, []);
  return (
    <div className="aside-container">
      <div className="aside-header">
        <Search />
        <Logo />
      </div>
      <div className="aside-content">
        <List links={navLinks} status={navLinksStatus} />
      </div>
    </div>
  );
};

export default DASide;
