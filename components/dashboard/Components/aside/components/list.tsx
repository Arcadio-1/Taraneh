import React, { useState } from "react";
import { DashboardNavLink, DashboardNavLinkList } from "../../../Types/Types";
import LoadingSpinner from "../../../../ui/LoadingSpiner/loadingSpiner";
import { Status } from "../../../../../Types/enums";
import Item from "./item";

type Props = {
  status: Status;
  links: DashboardNavLinkList;
};
const List = (props: Props) => {
  const [extand, setExtand] = useState<boolean>(false);
  return (
    <div className="mt-2">
      <ul className="dASide-content-list">
        {props.status === Status.loading && (
          <LoadingSpinner type={"loading"} text={"بارگیری..."} />
        )}
        {props.status === Status.success &&
          props.links.map((link: DashboardNavLink) => {
            if (link.parent === "root") {
              return (
                <li
                  className="pItem dASide-content-item pt-4 pb-4 border-[1px] border-g3_1 border-opacity-50"
                  key={link._id}
                >
                  <Item links={props.links} link={link} />
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default List;
