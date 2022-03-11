import { React, useState } from "react";
import "./Navigation.scss";
import settings from "../../images/settings-icon.png";
import instructions from "../../images/instruction-icon.png";
import SettingsMenu from "../Settingsmenu/SettingsMenu";
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
        src={settings}
        className="navigation__settings"
        alt="settings-icon"
        onClick={toggleSettings}
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
