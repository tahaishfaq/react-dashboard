import React from "react";
import {  NavLink } from "react-router-dom";
import { FaHome, FaChartBar } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import logo from "../assets/Grazle Logo 2048-1 (1) 1.png";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-y-8 ">
      <div className="flex items-center justify-center py-4 bg-white">
        <img src={logo} alt="logo" className="" />
      </div>
      <div className="bg-white flex flex-col gap-y-3 w-64 min-h-screen pr-4 ml-4 py-4 rounded-xl sidebar font-poppins">
        <ul>
          <li className="">
            <NavLink
              to="/"
              className="flex items-center py-[13px] pl-6 text-[#000000] text-[16px] font-[500]"
            >
              <RxDashboard className="mr-5" />
              Dashboard
            </NavLink>
          </li>
        </ul>
        <ul>
          <li className="">
            <NavLink
              to="/sales-overview"
              className="flex items-center py-[13px] pl-6 text-gray-600 text-[16px] font-[500]"
            >
              <RxDashboard className="mr-5" />
              Sales Overview
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
