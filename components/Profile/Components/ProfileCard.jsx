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
            height={50}
            width={50}
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
          <Link href={"/profile/personal-info"}>
            <EditIcon />
          </Link>
        </div>
      </div>
      <div className="mdSubs">
        <div className="mdSubs-item">
          <div className="mdSubs-item-image">
            <Image
              src={"/image/ui/profile/profile-wallet.svg"}
              height={40}
              width={40}
              alt={"کیف پول"}
            />
          </div>
          <div className="mdSubs-item-content">
            <div className="font-bold">
              <span> - </span>
              <TomanIcon />
            </div>
            <Link href={"/wallet"}>
              فعالسازی
              <ArrowsIcon arrowType={"left"} />
            </Link>
          </div>
        </div>
        <div className="mdSubs-item">
          <div className="mdSubs-item-image">
            <Image
              src={"/image/ui/profile/club-point.svg"}
              height={40}
              width={40}
              alt={"امتیازات"}
            />
          </div>
          <div className="mdSubs-item-content">
            <div className="font-bold">
              <span> 192 </span>
              <span className="font-normal text-gray-400">امتیاز</span>
            </div>
            <Link href={"/wallet"}>
              مشاهده جوایز <ArrowsIcon arrowType={"left"} />
            </Link>
          </div>
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
