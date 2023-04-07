import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  //console.log(isSidebarOpen);
  return (
    <div
      className={
        isSidebarOpen
          ? "sidebar-wrapper sidebar-wrapper-show"
          : "sidebar-wrapper"
      }
    >
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        {sublinks.map((link) => {
          return (
            <article key={link.pageId}>
              <h2>{link.page}</h2>
              <div className="sidebar-sublinks">
                {link.links.map((item) => {
                  return (
                    <div key={item.id}>
                      <a href={item.url}>
                        {item.icon}
                        {item.label}
                      </a>
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
