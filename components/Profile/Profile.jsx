import React from "react";
import FrequentPurchases from "./Components/FrequentPurchases";
import Orders from "./Components/orders/orders";
import MenuList from "./Components/MenuList";
import MyOrders from "./Components/MyOrders";
import ProfileCard from "./Components/ProfileCard";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import PersonalInfo from "./Components/personal-info/personalInfo";

const Profile = () => {
  const router = useRouter();
  // console.log(router.pathname);
  const { pathname } = router;
  const { data } = useSession();
  return (
    <div className="profile">
      <Breadcrumbs links={[{ link: "/profile", title: "پروفایل" }]} />
      <div className="profile-container">
        <aside className="profile-sideMenu">
          {data && data.user.email && (
            <ProfileCard
              name={data.user.email.name}
              family={data.user.email.family}
              mobile={data.user.email.mobile}
            />
          )}
          <MenuList />
        </aside>
        <div className="profile-content">
          {pathname === "/profile" && (
            <section>
              <MyOrders />
              <FrequentPurchases />
            </section>
          )}
          {pathname === "/profile/orders" && (
            <section>
              <Orders />
            </section>
          )}
          {pathname === "/profile/personal-info" && (
            <section>
              <PersonalInfo />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
