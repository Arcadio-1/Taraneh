import React from "react";
import { DashboardNavLink, DashboardNavLinkList } from "../../../Types/Types";
import LoadingSpinner from "../../../../ui/LoadingSpiner/loadingSpiner";
import { Status } from "../../../../../Types/enums";
import Item from "./item";

type Props = {
  status: Status;
  links: DashboardNavLinkList;
};
const List = (props: Props) => {
  return (
    <div>
      <ul>
        {props.status === Status.loading && (
          <LoadingSpinner type={"loading"} text={"بارگیری..."} />
        )}
        {props.status === Status.success &&
          props.links.length > 0 &&
          props.links.map((link: DashboardNavLink) => {
            if (link.parent === "root") {
              return <Item key={link._id} links={props.links} link={link} />;
            }
          })}
      </ul>
    </div>
  );
};

export default List;
