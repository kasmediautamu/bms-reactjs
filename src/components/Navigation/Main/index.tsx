import React from "react";
import "./styles.scss";
import home from "../../../assets/i/home.svg";
import search from "../../../assets/i/search.svg";
import settings from "../../../assets/i/settings.svg";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const Navigation = () => {
  let {url} = useRouteMatch()
  return (
    <nav className="left-nav">
      <ul>
        <li className="nav-item">
          <img src={home} alt="home" />
        </li>
        <li className="nav-item" >
          <Link to={`/customer-detail`}><img src={search} alt="search" /></Link>
        </li>
        <li className="nav-item"  >
          <Link to={`/settings`}><img src={settings} alt="settings" /></Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
