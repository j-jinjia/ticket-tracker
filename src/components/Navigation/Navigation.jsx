import { React, useState } from "react";
import "./Navigation.scss";
import user from "../../assets/images/login-icon.png";
import instructions from "../../assets/images/instruction-icon.png";
import SettingsMenu from "../SettingsMenu/SettingsMenu";
import InstructionsMenu from "../InstructionsMenu/InstructionsMenu";

const Navigation = (props) => {
  const { userName, handleSubmit } = props;
  const [showSettings, setShowsettings] = useState(false);
  const toggleSettings = () => {
    setShowsettings(!showSettings);
  };
  const [showInstructions, setShowInstructions] = useState(false);
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };
  return (
    <div className="navigation">
      {showSettings && (
        <SettingsMenu
          userName={userName}
          toggleSettings={toggleSettings}
          handleSubmit={handleSubmit}
        />
      )}
      {showInstructions && (
        <InstructionsMenu toggleInstructions={toggleInstructions} />
      )}
      <img
        src={user}
        className="navigation__settings"
        alt="settings-icon"
        onClick={toggleSettings}
        width="50px"
      />
      <img
        src={instructions}
        className="navigation__instructions"
        alt="settings-icon"
        onClick={toggleInstructions}
        width="50px"
      />
    </div>
  );
};

export default Navigation;
