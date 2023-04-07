import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  // return only one matched element
  // if using filter, should take 0-th element first (troublesome)
  const currentPage = sublinks.find((link) => link.pageId === pageId);

  const handleMouseLeave = (e) => {
    /*
    const submenu = submenuContainer.current;
    const result = submenu.getBoundingClientRect();
    const {clientX, clientY} = e

    if (clientX < left || clientX > right || clientY < bottom || clientY > top){
      setPageId(null);
    }
    */
    setPageId(null);
  };

  const submenuContainer = useRef(null);

  return (
    <div
      className={currentPage ? "submenu submenu-show" : "submenu"}
      onMouseLeave={handleMouseLeave}
    >
      <h3>{currentPage?.page}</h3>
      <div className="submenu-center">
        {currentPage?.links?.map((item) => {
          return (
            <a href={item.url} key={item.id}>
              {item.icon}
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
