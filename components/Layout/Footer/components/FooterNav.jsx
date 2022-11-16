import React from "react";
import Link from "next/link";
const FooterNav = (props) => {
  const { title, items } = props;
  return (
    <div className="footer-navs-item">
      <h3 className="footer-navs-item-title">{title}</h3>
      <ul className="footer-navs-item-list">
        {items.map((item) => {
          return (
            <li className="footer-navs-item-list-item" key={item.id}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNav;
