import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="nav-links">
      {sublinks.map((link) => {
        return (
          <div key={link.pageId}>
            <button
              className="link-btn"
              onMouseEnter={() => setPageId(link.pageId)}
            >
              {link.page}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
