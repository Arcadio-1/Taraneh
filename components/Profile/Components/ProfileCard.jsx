import Image from "next/image";
import React from "react";
import EditIcon from "../../ui/Icons/EditIcon";
import Link from "next/link";
import TomanIcon from "../../ui/Icons/tomanIcon";
import ArrowsIcon from "../../ui/Icons/arrowsIcon";

const ProfileCard = ({ name, family, mobile }) => {
  return (
    <div className="profile-profileCard">
      <div className="head">
        <div className="head-image">
          <Image
            src={"/image/ui/profile.png"}
            height={30}
            width={30}
            alt={name}
          />
        </div>
        <div className="head-data">
          <p className="fullname">
            {name} {family}
          </p>
          <p className="mobile">{mobile}</p>
        </div>
        <div className="head-edit">
          <EditIcon />
        </div>
      </div>
      <div className="subs">
        <ul className="subs-list">
          <li className="subs-item">
            <div className="subs-item-head">
              <p>کیف پول</p>
              <Link href={"/wallet"}>
                فعالسازی
                <ArrowsIcon arrowType={"left"} />
              </Link>
            </div>
            <div className="subs-item-data">
              <p>
                <span>0</span>
                <TomanIcon />
              </p>
            </div>
          </li>
          <li className="subs-item">
            <div className="subs-item-head">
              <p>امتیازات شما</p>
              <Link href={"/wallet"}>
                جوایز
                <ArrowsIcon arrowType={"left"} />
              </Link>
            </div>
            <div className="subs-item-data">
              <p>480 امتیاز</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
