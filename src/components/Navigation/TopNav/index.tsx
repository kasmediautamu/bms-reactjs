import React from "react";
import dropdown from "../../../assets/i/dropdown.svg";
import next from "../../../assets/i/nextpage.svg";
import profile from "../../../assets/images/profile.svg";
import time from "../../../assets/i/time.svg";
import usergroup from "../../../assets/i/group.svg";
import { useHistory } from "react-router";
import "./styles.scss";

const TopNav = () => {
  let history = useHistory();
  const Logout = () => {
    history.push("/");
  };
  const searchCustomer = () => {
    history.push("/dashboard/customer-detail");
  };
  const searchAccount = () => {
    history.push("/dashboard/account-detail");
  };
  return (
    <div className="top-nav">
      <div className="top-nav__mini">
        <h1>Search Customer</h1>
        <div className="profile">
          <img className="profile-image" src={profile} alt="user-profile" />
          <div className="profile-options">
            <p className="profile__name">Jane Doe</p>
            <img
              className="profile-select"
              src={dropdown}
              alt="select-option"
            />
          </div>
          <img src={next} alt="next-option" onClick={Logout} />
        </div>
      </div>
      <div className="top-nav__main">
        <nav className="main-nav__left">
          <ul className="navbar-list">
            <li className="nav-item" onClick={searchCustomer}>Search customer</li>
            <li className="nav-item" onClick={searchAccount}>Search account</li>
          </ul>
        </nav>
        <nav className="main-nav__right">
          <ul className="navbar-list">
            <li className="nav-item">
              <img src={time} alt="last-login" />
              <p>Last login:12 Oct 2020, 1:19:50 - IP:185.86.151.11</p>
            </li>
            <li className="nav-item">
              <img src={usergroup} alt="user-group" />
              <p>
                User group:<span>Customer Service</span>
              </p>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TopNav;
