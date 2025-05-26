import React from "react";

const Input = ({
  type,
  id,
  label,
  placeholder,
  value = "",
  handleChange = () => {},
}) => {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="input w-full focus:outline-0 mt-2"
      />
    </div>
  );
};

export default Input;
