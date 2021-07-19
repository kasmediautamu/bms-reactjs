import React from "react";
import building from "../../assets/i/building.svg";
import Button from "../BaseForm/Button";
import EmptySettings from "./EmptySettings";
import edit from "../../assets/i/edit.svg";
import deleteicon from "../../assets/i/deleteicon.svg";
import limit_icon from "../../assets/i/limiticon.svg";
import ReactTooltip from "react-tooltip";
import {  useLocation } from "react-router";

import "./styles.scss";
import SettingsButton from "./SettingsButton";


const Settings = () => {
  let settings_title = "Bank level limits maitenance"
  const ButtonLabel = "Add bank level limit";
  const settings = {
    "Faster Payments": {
      Personal: "50000",
      Business: "250000",
    },
    SEPA: {
      Personal: "50000",
      Business: "250000",
    },
    CHAPS: {
      Personal: "50000",
      Business: "250000",
    },
    SWIFT: {
      Personal: "50000",
      Business: "250000",
    },
  };
  console.log(Object.values(settings));
  //determining url 
  let location = useLocation();
  console.log(location)

  function ShowSettingsHeader() {
    if (
      settings.CHAPS.Business === "" &&
      settings["Faster Payments"].Business === "" &&
      settings.SEPA.Business === "" &&
      settings.CHAPS.Personal === "" &&
      settings["Faster Payments"].Personal === "" &&
      settings.SEPA.Personal === ""
    ) {
      return (
        <div className="settings__details--header">
          <div>
            <img src={building} alt="" />
            <p>{settings_title}</p>
          </div>
          <div>{/* <SettingsButton /> */}</div>
        </div>
      );
    } else {
      return (
        <div className="settings__details--header">
          <div>
            <img src={building} alt="" />
            <p>Bank level limits maintenance</p>
          </div>
          <div>
            <SettingsButton ButtonLabel={ButtonLabel} />
          </div>
        </div>
      );
    }
  }
  function ShowLimitsList() {
    if (
      settings.CHAPS.Business === "" &&
      settings["Faster Payments"].Business === "" &&
      settings.SEPA.Business === "" &&
      settings.CHAPS.Personal === "" &&
      settings["Faster Payments"].Personal === "" &&
      settings.SEPA.Personal === ""
    ) {
      return (
        <div className="settings__details--list">
          <EmptySettings reminder="No limits added. Please add bank level limit here. Addtional info lorem ipsum goes here">
            <SettingsButton ButtonLabel={ButtonLabel}/>
          </EmptySettings>
        </div>
      );
    } else {
      return <SettingsDetilsList />;
    }
  }

  
  function SettingsDetilsList() {
    return (
      <div className="settings__list">
        <div>
          <div className="left">
            <img src={limit_icon} alt="" />
            <div>
              <p>Faster Payments</p>
              <p>
                <span>Personal:</span>
                <small>${settings["Faster Payments"]?.Personal}</small>
                <span>-</span>
                <span>Business:</span>
                <small>${settings["Faster Payments"]?.Business}</small>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={edit} alt="" data-tip data-for="updateTip" />
            <img src={deleteicon} alt="" />
          </div>
        </div>
        <div>
          <div className="left">
            <img src={limit_icon} alt="" />
            <div>
              <p>SEPA</p>
              <p>
                <span>Personal:</span>
                <small>${settings?.SEPA?.Personal}</small>
                <span>-</span>
                <span>Business:</span>
                <small>${settings?.SEPA?.Business}</small>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={edit} alt="" data-tip data-for="updateTip" />
            <img src={deleteicon} alt="" />
          </div>
        </div>
        <div>
          <div className="left">
            <img src={limit_icon} alt="" />
            <div>
              <p>CHAPS</p>
              <p>
                <span>Personal:</span>
                <small>${settings?.CHAPS?.Personal}</small>
                <span>-</span>
                <span>Business:</span>
                <small>${settings?.CHAPS?.Business}</small>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={edit} alt="" data-tip data-for="updateTip" />
            <img src={deleteicon} alt="" />
          </div>
        </div>
        <div>
          <div className="left">
            <img src={limit_icon} alt="" />
            <div>
              <p>SWIFT</p>
              <p>
                <span>Personal:</span>
                <small>${settings.SWIFT.Personal}</small>
                <span>-</span>
                <span>Business:</span>
                <small>${settings.SWIFT.Business}</small>
              </p>
            </div>
          </div>
          <div className="right">
            <img src={edit} alt="" data-tip data-for="updateTip" />
            <img src={deleteicon} alt="" />
          </div>
        </div>
        <ReactTooltip
          id="updateTip"
          place="top"
          effect="solid"
          backgroundColor="#132F41"
          textColor="#FFF"
          className="update-tool-tip"
        >
          <div className="update-tip-content">update</div>
        </ReactTooltip>
      </div>
    );
  }

  return (
    <div className="settings">
      <div className="settings__left">
      </div>
      <div className="settings__right">
        {/* settings header */}
        <ShowSettingsHeader />
        <hr />
        {/* empty component */}
        <ShowLimitsList />
        {/* settings details */}
      </div>
    </div>
  );
};

export default Settings;
