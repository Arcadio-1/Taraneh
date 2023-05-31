import React from "react";
import Dashboard from "../../components/dashboard/dashboard";
import { getSession } from "next-auth/react";

const index = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: "/access_denied",
        permenent: false,
      },
    };
  }
  return { props: { session } };
}

export default index;
