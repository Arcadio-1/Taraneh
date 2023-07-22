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
  const [selected, setSelected] = useState<string>("");
  const selectedHandler = (id: string) => {
    if (id === selected) {
      return setSelected("");
    }
    setSelected(id);
  };
  return (
    <div className="mt-2">
      <ul className="aside-content-list">
        {props.status === Status.loading && (
          <LoadingSpinner type={"loading"} text={"بارگیری..."} />
        )}
        {props.status === Status.success &&
          props.links.map((link: DashboardNavLink) => {
            return (
              <li
                className="aside-content-item aside-content-item-parent "
                key={link._id}
              >
                <Item
                  selected={selected}
                  selectedHandler={selectedHandler}
                  link={link}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default List;
