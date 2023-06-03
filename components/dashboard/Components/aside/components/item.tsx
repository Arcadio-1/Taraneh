import Image from "next/image";
import Link from "next/link";
import React, {
  Fragment,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DashboardNavLink, DashboardNavLinkList } from "../../../Types/Types";
import ArrowsIcon from "../../../../ui/Icons/arrowsIcon";
interface props {
  links: DashboardNavLinkList;
  link: DashboardNavLink;
}

const Item = (props: props) => {
  const { link, links } = props;
  const [height, setHeight] = useState(0);
  const ref = React.useRef<HTMLUListElement>();
  const [extend, setExtend] = useState<boolean>(false);

  const extandToggler = () => {
    // setExtend(false);
    setExtend((prev) => {
      return (prev = !prev);
    });
  };
  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
      console.log(height);
    }
  }, [height]);

  return (
    <Fragment>
      <Link
        onClick={() => {
          if (props.link.hasChild) {
            extandToggler();
          }
        }}
        href={props.link.link}
        className="pr-4 pb-2 flex gap-1 justify-between pl-2"
      >
        <div className="flex gap-2">
          {props.link.icon && (
            <Image
              src={props.link.icon}
              alt={props.link.title}
              width={15}
              height={15}
            />
          )}
          <span className="text-xl text-light_2">{props.link.title}</span>
        </div>
        {props.link.hasChild && <ArrowsIcon arrowType={"down"} />}
      </Link>

      {props.link.hasChild && (
        <div
          className={`cItem testingTransision overflow-hidden`}
          style={
            extend
              ? {
                  padding: "5px",
                  overflow: "scroll",
                  height: `${height + 10}px `,
                }
              : { height: "0px" }
          }
        >
          <ul ref={ref} className="pr-6">
            {props.link.childs.map((itemy: DashboardNavLink) => {
              return (
                <li key={itemy.id} className="dASide-content-item pb-2 pt-2">
                  <Item link={itemy} links={itemy.childs} />
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
