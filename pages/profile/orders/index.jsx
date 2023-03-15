import { getSession } from "next-auth/react";
import React from "react";
import Profile from "../../../components/Profile/Profile";

const index = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permenent: false,
      },
    };
  }
  return { props: { session } };
}

export default index;
