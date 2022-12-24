import React from "react";
import { getSession } from "next-auth/react";

import Account from "../../components/Auth/Account";
const AccountPage = () => {
  return (
    <div>
      <Account />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: {
        destination: "/",
        permenent: false,
      },
    };
  }
  return { props: { session } };
}

export default AccountPage;
