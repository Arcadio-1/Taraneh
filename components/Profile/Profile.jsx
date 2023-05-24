import React, { useEffect } from "react";
import FrequentPurchases from "./Components/ActivitiesSummary/FrequentPurchases";
import Orders from "./Components/orders/orders";
import MenuList from "./Components/MenuList";
import MyOrders from "./Components/ActivitiesSummary/MyOrders";
import ProfileCard from "./Components/ProfileCard";
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import PersonalInfo from "./Components/personal-info/personalInfo";
import MyList from "./Components/myLists/MyLists";
import { useSelector } from "react-redux";
const Profile = () => {
  const router = useRouter();
  // console.log(router.pathname);
  const { pathname } = router;
  const { data } = useSession();
  const size = useSelector((state) => state.ui.windowWidth);
  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <div className="profile">
      <Breadcrumbs links={[{ link: "/profile", title: "پروفایل" }]} />
      <div className="profile-container">
        {size > 768 && (
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
        )}

        <div className="profile-content">
          {pathname === "/profile" && (
            <section>
              {size < 768 && (
                <ProfileCard
                  name={data.user.email.name}
                  family={data.user.email.family}
                  mobile={data.user.email.mobile}
                />
              )}
              <MyOrders />
              {size < 768 && <MenuList />}
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
          {pathname === "/profile/lists" && (
            <section>
              <MyList />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
