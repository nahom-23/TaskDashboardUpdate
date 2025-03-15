import React, { useState, useEffect } from "react";
import { FaHome, FaUsers, FaChartBar, FaCog } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import Button from "../components/ui/button";

const Sidebar = ({ setActiveSection }) => {
  const [active, setActive] = useState("projects");
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { icon: <FaHome />, label: "projects" },
    { icon: <FaUsers />, label: "Users" },
    { icon: <FaChartBar />, label: "checklist" },
    { icon: <FaChartLine />, label: "dailyroutine" },
    { icon: <FaCog />, label: "Settings" },
  ];

  const handleClick = (section) => {
    setActive(section);
    setActiveSection(section);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`bg-white p-4 shadow h-screen fixed md:relative ${
          isCollapsed ? "w-16" : "w-64"
        } transform md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
      >
        <nav className="space-y-2">
          {menuItems.map((item, idx) => (
            <Button
              key={idx}
              variant={active === item.label ? "default" : "ghost"}
              className={`w-full flex items-center gap-3 ${
                isCollapsed ? "justify-center" : "justify-start"
              } ${active === item.label ? "bg-primary text-white" : ""}`}
              onClick={() => handleClick(item.label)}
            >
              <span>{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
