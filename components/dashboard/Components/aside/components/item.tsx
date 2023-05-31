import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DashboardNavLink, DashboardNavLinkList } from "../../../Types/Types";

interface props {
  links: DashboardNavLinkList;
  link: DashboardNavLink;
}

const Item = (props: props) => {
  console.log(props.links);
  const nestedLink = (props.links || []).map((linky: DashboardNavLink) => {
    if (linky.parent !== "root" && linky.parent === props.link.id) {
      return <Item key={linky.id} link={linky} links={props.links} />;
    }
  });
  return (
    <li key={props.link._id} className="">
      <Link href={props.link.link} className="flex gap-1">
        {props.link.icon && (
          <Image
            src={props.link.icon}
            alt={props.link.title}
            width={10}
            height={10}
          />
        )}

        <span>{props.link.title}</span>
      </Link>
      {nestedLink && (
        <div className="reviwe-item-childContainer">
          <div className="reviwe-item-child">{nestedLink}</div>
        </div>
      )}
    </li>
  );
};

export default Item;
