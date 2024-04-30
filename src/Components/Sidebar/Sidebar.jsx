import {
  LifeBuoy,
  BarChartBig,
  LayoutDashboard,
  ContactRound,
  CircleArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";
import Theme from "../Theme";
function Sidebar() {
  const [status, setStatus] = useState(0);
  const [collapse, setCollapse] = useState(true);
  const variants = {
    open: { width: "19%" },
    closed: { width: "7.5%" },
  };
  const navList = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Analytics",
      icon: <BarChartBig />,
    },
    {
      name: "Contact",
      icon: <ContactRound />,
    },
    {
      name: "Help",
      icon: <LifeBuoy />,
    },
  ];
  return (
    <>
      <div className="flex">
        <motion.div
          animate={collapse ? "open" : "closed"}
          variants={variants}
          className={
            collapse
              ? "px-12 py-9 flex flex-col w-1/5 h-screen border border-r-1 relative"
              : "relative border border-r-1 h-screen py-9 px-8"
          }
        >
          <div className="flex items-center space-x-3 ">
            <img
              className="w-10 mx-auto rounded-lg"
              src="https://img.lovepik.com/free-png/20210918/lovepik-money-png-image_400242554_wh1200.png"
              alt="logo"
            />
            <span className={collapse ? "text-lg font-semibold" : "hidden"}>
              Money Tracker
            </span>
          </div>

          <div
            className="absolute -right-3 top-11 bg-rose-300 rounded-full text-white cursor-pointer"
            onClick={() => setCollapse(!collapse)}
          >
            <CircleArrowRight />
          </div>
          <div className="space-y-9  mt-9">
            {navList.map((items, index) => {
              return (
                <div
                  className={
                    "flex space-x-3 p-2 cursor-pointer " +
                    (status === index ? "bg-red-300 text-white rounded-lg" : "")
                  }
                  key={index}
                  onClick={() => setStatus(index)}
                >
                  <Link to={`/${items.name.toLocaleLowerCase()}`}>
                    <span>{items.icon}</span>
                  </Link>

                  <span className={collapse ? "font-semibold" : "hidden"}>
                    {items.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
        <Outlet />
        <div className="flex mt-9 absolute left-[95%]">
          <Theme />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
