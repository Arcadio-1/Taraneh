import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useLayoutEffect, useState } from "react";
import { DashboardNavLink, DashboardNavLinkList } from "../../../Types/Types";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
interface props {
  link: DashboardNavLink;
  selected: string;
  selectedHandler: (id: string) => void;
}

const Item = (props: props) => {
  const { link } = props;
  const [height, setHeight] = useState(0);
  const ref = React.useRef<HTMLUListElement>();

  const [selected, setSelected] = useState<string>("");
  const selectedHandler = (id: string) => {
    if (id === selected) {
      return setSelected("");
    }
    setSelected(id);
  };

  const extandToggler = (id: string) => {
    props.selectedHandler(id);
  };
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [height]);

  return (
    <Fragment>
      <Link
        onClick={() => {
          extandToggler(link.id);
        }}
        href={link.link}
      >
        <div className="title">
          {link.icon && (
            <Image src={link.icon} alt={link.title} width={30} height={30} />
          )}
          <span className="text">{link.title}</span>
        </div>
        {link.hasChild && <ArrowsIcon arrowType={"down"} />}
      </Link>

      {link.hasChild && (
        <div
          className="aside-content-item-childs"
          style={
            props.selected === link.id
              ? {
                  padding: "5px",
                  // overflow: "scroll",
                  height: `${height + 10}px `,
                }
              : { height: "0px" }
          }
        >
          <ul ref={ref} className="aside-content-item-childs-list">
            {link.childs.map((itemy: DashboardNavLink) => {
              return (
                <li key={itemy.id} className="aside-content-item">
                  <Item
                    selected={selected}
                    selectedHandler={selectedHandler}
                    link={itemy}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Item;
