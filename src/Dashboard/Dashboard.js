import { DashDiv, DashNav, DashNavH2, DashButton } from "./DashboardElements";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../SidebarMenu/SidebarData";
import "../SidebarMenu/SidebarMenu.css";
import { IconContext } from "react-icons";

const Dashboard = ({ handleLogout }) => {
  const [sidebar, setSidebar] = useState(false);

  const Name = "Brian";
  return (
    <>
      <DashDiv>
        <DashNav>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              {/*<Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </Link>*/}
            </div>
            <nav className={!sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items">
                <li className="navbar-toggle">
                  {/*<Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>*/}
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
          <DashNavH2>Welcome {Name}!</DashNavH2>
          <DashButton onClick={handleLogout}>LOG OUT</DashButton>
        </DashNav>
      </DashDiv>
    </>
  );
};

export default Dashboard;
