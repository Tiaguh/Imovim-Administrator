import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./NavBar.css"
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
      <IconContext.Provider value={{ color: "#000" }}>

        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars color="#FFF" onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>

          <ul className="nav-menu-items" onClick={showSidebar}>

            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <GrClose color="#FFF" />
              </Link>
            </li>

            <li>
              <Link className="icon-container" to="">
                <AiIcons.AiOutlineHistory size={30} />
                <h1>History</h1>
              </Link>

              <Link to="">
                <AiIcons.AiOutlineHistory size={30} />
                <h1>History</h1>
              </Link>

            </li>

          </ul>

        </nav>

      </IconContext.Provider>
    </>
  );
}

export default Navbar;