import React from "react";
import "./styles.scss";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  testId,
  ...props
}) => {
  return (
    <div className="InputContainer">
      {label && (
        <label htmlFor={name}>
          {label} {required ? <span className="red">*</span> : null}
        </label>
      )}{" "}
      <input
        type={type || "text"}
        {...props}
        id={name}
        data-testid={testId}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
