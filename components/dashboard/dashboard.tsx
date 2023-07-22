import React from "react";
import DASide from "./Components/aside/DASide";
import DMain from "./Components/main/DMain";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-aside">
        <DASide />
      </div>
      <div className="dashboard-main">
        <DMain />
      </div>
    </div>
  );
};

export default Dashboard;
