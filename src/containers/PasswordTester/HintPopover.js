import React from "react";
import "./styles.scss";
const HintPopover = ({ errors }) => {
  return (
    <div className="popover">
      <ul>
        <li
          className={
            errors.hasMinLength && !errors.greaterThanMaxLength
              ? "strikeOut"
              : ""
          }
        >
          It has at least 6 characters and at most 20 characters.
        </li>
        <li className={errors.hasLowercase ? "strikeOut" : ""}>
          It contains at least one lowercase letter
        </li>
        <li className={errors.hasUppercase ? "strikeOut" : ""}>
          It contains at least one uppercase letter
        </li>
        <li className={errors.hasDigit ? "strikeOut" : ""}>
          It contains at least one digit.
        </li>
        <li className={errors.noRepeatingCharacters ? "strikeOut" : ""}>
          It should not contain three same consecutive characters.
        </li>
      </ul>
    </div>
  );
};

export default HintPopover;
