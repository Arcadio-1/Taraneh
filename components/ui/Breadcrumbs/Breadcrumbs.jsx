import React from "react";
import Link from "next/link";
import ArrowIcon from "../Icons/arrowsIcon";
const Breadcrumbs = ({ links }) => {
  const address = [
    { id: 1, title: "صفحه نخست", link: "/" },
    { id: 2, title: "محصولات", link: "/products" },
  ];
  if (links) {
    address.push(...links);
  }
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs-list">
        {address.map((link) => {
          return (
            <li className="breadcrumbs-item" key={link.id}>
              <Link href={link.link}>{link.title}</Link>
              <ArrowIcon arrowType="left" />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
