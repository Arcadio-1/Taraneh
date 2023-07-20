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
  const test = JSON.stringify(session);
  const test2 = JSON.parse(test);
  const rank = test2.user.email.rank;
  console.log(rank);
  if (rank !== "admin") {
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
