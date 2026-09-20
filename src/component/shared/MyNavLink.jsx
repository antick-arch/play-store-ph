import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, children }) => {
  return (
    <div>
      <li>
        <NavLink
          to={to}
          className={({ isActive }) => `${isActive && "border-b-2 p-1"}`}
        >
          {children}
        </NavLink>
      </li>
    </div>
  );
};

export default MyNavLink;
