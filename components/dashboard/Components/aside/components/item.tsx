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
  const [extend, setExtend] = useState<boolean>(false);

  const [selected, setSelected] = useState<string>("");
  const selectedHandler = (id: string) => {
    setSelected(id);
  };

  const extandToggler = (id: string) => {
    console.log(id);
    props.selectedHandler(id);
    setExtend((prev) => {
      return (prev = !prev);
    });
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
        className="pr-4 pb-2 flex gap-1 justify-between pl-2"
      >
        <div className="flex gap-2">
          {link.icon && (
            <Image src={link.icon} alt={link.title} width={15} height={15} />
          )}
          <span className="text-xl text-light_2">{link.title}</span>
        </div>
        {link.hasChild && <ArrowsIcon arrowType={"down"} />}
      </Link>

      {link.hasChild && (
        <div
          className={`cItem testingTransision overflow-hidden`}
          style={
            props.selected === link.id
              ? {
                  padding: "5px",
                  overflow: "scroll",
                  height: `${height + 10}px `,
                }
              : { height: "0px" }
          }
        >
          <ul ref={ref} className="pr-6">
            {link.childs.map((itemy: DashboardNavLink) => {
              return (
                <li key={itemy.id} className="dASide-content-item pb-2 pt-2">
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
//  ${
//             extend ? "openDashNav" : "closeDashNav"
//           }
