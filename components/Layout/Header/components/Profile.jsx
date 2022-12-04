import React from "react";
import UserIcon from "../../../ui/Icons/UserIcon";
import ProfileIcon from "../../../ui/Icons/ProfileIcon";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import ArrowsIcon from "../../../ui/Icons/arrowsIcon";

const Profile = () => {
  const { data } = useSession();
  // console.log(data.user);
  const signoutHandler = () => {
    signOut();
  };
  return (
    <div className="header-profile">
      <div className="header-profile-icons">
        <UserIcon />
        <ArrowsIcon arrowType="down" />
      </div>
    </div>
  );
};

export default Profile;
