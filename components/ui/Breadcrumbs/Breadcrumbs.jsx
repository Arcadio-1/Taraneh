import React from "react";
import Link from "next/link";
import ArrowIcon from "../Icons/arrowsIcon";
const Breadcrumbs = ({ links }) => {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs-list">
        {links.map((link) => {
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
