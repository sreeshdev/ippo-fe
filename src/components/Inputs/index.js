import React from "react";
import "./styles.scss";

const Input = ({ label, type, name, value, onChange, required, ...props }) => {
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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
