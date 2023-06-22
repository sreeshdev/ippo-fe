import React, { useEffect, useState } from "react";
import Input from "../../components/Inputs";
import InfoIcon from "../../assets/infoRed.svg";
import { services } from "../../services";
import "./styles.scss";
import { toast } from "react-toastify";
import HintPopover from "./HintPopover";
const PasswordTester = () => {
  const [password, setPassword] = useState("");
  const [requiredLength, setRequiredLength] = useState(6);
  const [errors, setErrors] = useState({
    hasLowercase: false,
    hasUppercase: false,
    hasDigit: false,
    noRepeatingCharacters: true,
    hasMinLength: false,
    greaterThanMaxLength: false,
  });
  const [showError, setShowErrors] = useState(false);

  useEffect(() => {
    countStepsToMakeStrong(password);
  }, [password]);

  const countStepsToMakeStrong = (input) => {
    const MIN_LENGTH = 6;
    const MAX_LENGTH = 20;

    // Track the requirements for a strong password
    let missingRequirements = 0;
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
    let noRepeatingCharacters = true;
    let hasMinLength = false;
    let greaterThanMaxLength = false;
    // Check each character in the password
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (!hasLowercase && /[a-z]/.test(char)) {
        hasLowercase = true;
      } else if (!hasUppercase && /[A-Z]/.test(char)) {
        hasUppercase = true;
      } else if (!hasDigit && /[0-9]/.test(char)) {
        console.log("DIGIT");
        hasDigit = true;
      }

      // Check for three repeating characters in a row
      if (
        noRepeatingCharacters &&
        i > 1 &&
        char === input[i - 1] &&
        char === input[i - 2]
      ) {
        noRepeatingCharacters = false;
        // i += 2; // Skip the repeating characters
      }
    }

    // Calculate the minimum number of steps required
    missingRequirements +=
      !hasLowercase + !hasUppercase + !hasDigit + !noRepeatingCharacters;

    if (input.length < MIN_LENGTH) {
      setRequiredLength(
        Math.max(MIN_LENGTH - input.length, missingRequirements)
      );
    } else if (input.length > MAX_LENGTH) {
      const deletions = input.length - MAX_LENGTH;
      setRequiredLength(-Math.max(deletions, missingRequirements));
      greaterThanMaxLength = true;
    } else {
      hasMinLength = true;
      setRequiredLength(missingRequirements);
    }
    setErrors({
      hasLowercase,
      hasUppercase,
      hasDigit,
      noRepeatingCharacters,
      hasMinLength,
      greaterThanMaxLength,
    });
  };

  const saveData = () => {
    //Save Password through API
    services.createTestData(
      {
        value: password,
        requiredLength,
        type: requiredLength === 0 ? "strong" : "weak",
      },
      () => {},
      handleSaveSuccess,
      handleError,
      () => {}
    );
  };

  const handleSaveSuccess = (data) => {
    toast.success("Password Saved Successfully");
    setPassword("");
  };

  const handleError = (error) => {
    toast.error(error.response.data.message);
  };

  return (
    <div className="container">
      <div className="heading">Password Tester</div>
      <div className="inputContent">
        <Input
          label={"Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="output">
          Required length: {requiredLength}{" "}
          <div className="iconContainer">
            <img
              className="icon"
              src={InfoIcon}
              alt=""
              onClick={() => setShowErrors((prev) => !prev)}
            />
            {showError && <HintPopover errors={errors} />}
          </div>
        </div>
        <div className="outputType">{requiredLength ? "Weak" : "Strong"}</div>
      </div>
      <button
        disabled={password.length === 0}
        className="saveButton"
        onClick={saveData}
      >
        Save
      </button>
    </div>
  );
};

export default PasswordTester;
