import React from "react";
import { DashDiv, DashNav, DashNavH2, DashButton } from "./DashboardElements";

const Dashboard = ({ handleLogout }) => {
  const Name = "Brian";
  return (
    <>
      <DashDiv>
        <DashNav>
          <DashNavH2>Welcome {Name}!</DashNavH2>
          <DashButton onClick={handleLogout}>LOG OUT</DashButton>
        </DashNav>
      </DashDiv>
    </>
  );
};

export default Dashboard;
