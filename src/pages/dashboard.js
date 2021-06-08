import React from "react";
import "../components/Signin/login.css";

const dashboard = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>THIS IS THE AFTER-LOGIN PAGE // DASHBOARD</h2>
        <button onClick={handleLogout}>LOG OUT</button>
      </nav>
    </section>
  );
};

export default dashboard;
