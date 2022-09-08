import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./RouterLayout.css";

const RouterLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/names">Avengers</Link>
          </li>
          <li>
            <Link to="/colors">Suit Colors</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/dependent">Dependents</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default RouterLayout;
