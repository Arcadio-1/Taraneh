import Link from "next/link";
import React, { useEffect, useState } from "react";

const BFooterNavLinks = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [navLinksStatus, setNavLinksStatus] = useState();

  useEffect(() => {
    const getFooterNavLinks = async () => {
      try {
        setNavLinksStatus({ status: "loading", message: "در حال بارگزاری" });
        const request = await fetch("/api/blog/ui/getFooterNavLinks", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!request) {
          throw new Error("خطا در دریافت اطلاعات");
        }
        const response = await request.json();
        if (response.status !== "success") {
          throw new Error("خطا در دریافت اطلاعات");
        }
        setNavLinks((prev) => {
          return (prev = response.data);
        });
      } catch (error) {
        setNavLinksStatus({ status: "error", message: error.message });
      }
    };
    getFooterNavLinks();
  }, []);

  return (
    <div className="BFooter-NavLinks">
      <ul className="BFooter-NavLinks-list">
        {navLinks.length > 0 &&
          navLinks.map((item) => {
            return (
              <li className="BFooter-NavLinks-list-item" key={item.id}>
                <Link href={`${item.id}`}>{item.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default BFooterNavLinks;
