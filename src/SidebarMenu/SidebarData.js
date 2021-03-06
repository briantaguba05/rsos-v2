import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "My Information",
    path: "/myinfo",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

  {
    title: "Weather",
    path: "/weather",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "News",
    path: "/news",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
];
