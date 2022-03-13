import whiteCross from "../../assets/images/white-cross.png";
import React from "react";
import "./InstructionsMenu.scss";

const InstructionsMenu = (props) => {
  const { toggleInstructions } = props;
  return (
    <div className="instructions-menu">
      <div className="instructions-menu__content">
        <img
          src={whiteCross}
          alt="Close menu"
          className="instructions-menu__cross"
          onClick={toggleInstructions}
        />
        <h2 className="instructions-menu__title">Instructions</h2>
        <ul className="instructions-menu__list">
          <li key="">
            Click the Settings icon to change the user's name and surname
          </li>
          <li>
            Click the arrow up or down to increase or decrease the ticket count
            respectively
          </li>
          <li>Click the bin icon to delete the ticket count</li>
        </ul>
      </div>
    </div>
  );
};

export default InstructionsMenu;
