import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import store from "../../assets/images/store.svg";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={logo} alt="apple" />
          </li>
          <li>
            <a className="linked-styled">Store</a>
          </li>
          <li>
            <a className="linked-styled">Mac</a>
          </li>
          <li>
            <a className="linked-styled">IPad</a>
          </li>
          <li>
            <a className="linked-styled">Iphone</a>
          </li>
          <li>
            <a className="linked-styled">Airpods</a>
          </li>
          <li>
            <a className="linked-styled">Tv & Home</a>
          </li>
          <li>
            <a className="linked-styled">Entertainment</a>
          </li>
          <li>
            <a className="linked-styled">Accessories</a>
          </li>
          <li>
            <a className="linked-styled">support</a>
          </li>
          <li>
            <img src={search} alt="" />
          </li>
          <li>
            <img src={store} alt="" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
