import { DashDiv, DashNav, DashNavH2, DashButton } from "./DashboardElements";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { SidebarData } from "../SidebarMenu/SidebarData";
import "../SidebarMenu/SidebarMenu.css";
import { IconContext } from "react-icons";
import { useAuth } from "../components/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const [sidebar, setSidebar] = useState(false);
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <DashDiv>
        <DashNav>
          <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
              {/*<Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={setSidebar} />
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
          <DashNavH2>Welcome {currentUser.email}</DashNavH2>
          <DashButton onClick={handleLogout}>LOG OUT</DashButton>
        </DashNav>
      </DashDiv>
    </>
  );
};

export default Dashboard;
