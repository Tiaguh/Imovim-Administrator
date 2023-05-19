import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import Menu from './img/menu.png';
import Close from './img/close.png';

import Historic from './img/historic.png';
import Image from './img/image.png';
import User from './img/user.png'

import Exit from './img/exit.png'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>

      <header>

        <div className="menu-bars">

          <button className="button-container" onClick={showSidebar}>
            <img className="icon-button" src={Menu} />
          </button>

        </div>

      </header>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}> {/* if activated the class gets a name otherwise another */}

        <div className="nav-menu-items" onClick={showSidebar}>

          <div className="navbar-toggle">

            <div className="menu-bars">

              <button className="button-container">
                <img className="icon-button" src={Close} />
              </button>

            </div>

          </div>

          <div className="nav-buttons-container" >

            <div className="title-container">
              <h1 className="title">Menu</h1>
            </div>

            <div>

              <Link
                to=""
                className="nav-button"
              >
                <img className="icon-button" src={Historic} />
                <h1>Histórico</h1>
              </Link>

              <Link
                to=""
                className="nav-button"
              >
                <img className="icon-button" src={Image} />
                <h1>Posts Denuciados</h1>
              </Link>

              <Link
                to=""
                className="nav-button"
              >
                <img className="icon-button" src={User} />
                <h1>Usuários Denuciados</h1>
              </Link>

            </div>

            <div className="exit-container">

              <Link
                to=""
                className="nav-button-exit"
              >
                <img className="icon-button" src={Exit} />
                <h1>Sair</h1>
              </Link>
              
            </div>

          </div>

        </div>

      </nav>

    </div>
  );
}

export default Navbar;