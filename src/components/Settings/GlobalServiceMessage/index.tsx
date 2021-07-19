import React from "react";
import { useHistory } from "react-router";
import EmptySettings from "../EmptySettings";
import SettingsButton from "../SettingsButton";

import "./styles.scss";

const GlobalServiceMessage = () => {
  const ButtonLabel = "Add global service message";
  let history = useHistory()
  const showMessageCreationComponent =()=>{
    history.push('/settings/create-global-service-message')
    console.log('am clicked')
}
  return (
    <>
      <EmptySettings reminder="No messages are configured for the customer segment">
        <SettingsButton ButtonLabel={ButtonLabel} onclick={showMessageCreationComponent}/>
      </EmptySettings>
    </>
  );
};
export default GlobalServiceMessage;
