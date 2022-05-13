import React from "react";

function Input({ value, placeholder = "Текст", onChange }) {
  return (
    <form className={"input_container"}>
      <input
        type="text"
        placeholder={placeholder}
        className={"input"}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <div className={"search_icon"}>
        <i className="fa fa-search" aria-hidden="true">
          {" "}
        </i>
      </div>
    </form>
  );
}

export default Input;
