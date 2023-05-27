import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import Menu from './img/menu.png';
import Close from './img/close.png';

import Home from './img/home.png'
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

            <div className="pessoal-info-container">
              <div className="img-container" >
                <img className="img" src="https://firebasestorage.googleapis.com/v0/b/tcc-firebase-c1952.appspot.com/o/profileImage%2F1684366290357%2F0.9513496802173749?alt=media&token=4ec2f388-5173-41e4-8f73-409c1b90e852" />
              </div>
              <div className="name-container">
                <h1>Luis</h1>
              </div>
            </div>

            <div>

              <Link
                to="/"
                className="nav-button"
              >
                <img className="icon-button" src={Image} />
                <h1>Pendentes</h1>
              </Link>

              <Link
                to="/historico"
                className="nav-button"
              >
                <img className="icon-button" src={Historic} />
                <h1>Histórico</h1>
              </Link>

            </div>

            <div className="exit-container">

              <Link
                to="/login"
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