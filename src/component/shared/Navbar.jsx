import React from "react";
import { SiGithub } from "react-icons/si";
import { NavLink } from "react-router";
import navImg from "../../assets/images/logo.png";
import MyNavLink from "./MyNavLink";
const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
  ];
  return (
    <div className="shadow">
      <nav className="container mx-auto flex justify-between items-center py-3">
        <div className="flex items-center gap-2">
          <img src={navImg} alt="" className="w-10" />
          <h2 className="text-transparent bg-clip-text bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-2xl font-bold">
            HERO .IO
          </h2>
        </div>
        <ul className="flex justify-between gap-10 font-semibold text-xl">
          {navItems.map((items) => (
            <MyNavLink to={items.path}>{items.text}</MyNavLink>
          ))}
        </ul>
        <button className="btn btn-primary bg-linear-to-r from-[#632ee3] to-[#9f62f2] border-none text-white">
          <SiGithub />
          Contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
