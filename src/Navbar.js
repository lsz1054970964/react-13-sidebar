import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    //console.log(e.target);
    if (!e.target.classList.contains("link-btn", "nav-links")) {
      setPageId(null);
    }
  };

  return (
    <div className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <img src={logo} alt="strapi"></img>
        <NavLinks />
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
