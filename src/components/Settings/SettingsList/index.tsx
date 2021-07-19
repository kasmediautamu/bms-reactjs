import React from "react";
import building from "../../../assets/i/building.svg";
import edit from "../../../assets/i/edit.svg";
import deleteicon from "../../../assets/i/deleteicon.svg";
import limit_icon from "../../../assets/i/limiticon.svg";
import ReactTooltip from "react-tooltip";
import Button from "../../BaseForm/Button";
import './styles.scss'
import { useHistory } from "react-router";

const SettingsList = () => {
  let history = useHistory()
  const showEditComponent =()=>{
    history.push('/settings/settings-edit')
}
  let settings_title = "Bank level limits maitenance";
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
            <SettingsButton />
          </div>
        </div>
      );
    }
  }
  function SettingsButton() {
    return (
      <Button btnClass="settings-button" disabled primary="button">
        {ButtonLabel}
      </Button>
    );
  }
  return (
    <div className="settings__right">
      {/* settings header */}
        <ShowSettingsHeader/>
      <hr />
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
            <img src={edit} alt="" data-tip data-for="updateTip" onClick={showEditComponent}/>
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
            <img src={edit} alt="" data-tip data-for="updateTip" onClick={showEditComponent}/>
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
            <img src={edit} alt="" data-tip data-for="updateTip" onClick={showEditComponent} />
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
            <img src={edit} alt="" data-tip data-for="updateTip" onClick={showEditComponent}/>
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
    </div>
  );
};

export default SettingsList;
