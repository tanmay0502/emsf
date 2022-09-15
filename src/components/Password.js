import React from "react";
import { useState } from "react";
const Password = (props) => {
  return (
    <div className="mobile-tab  place-content-center ">
      <p className="text-neutral-700 ml-2 -mb-2 mt-10">
        User ID:&nbsp; {props.user}
      </p>
      <input
        type="text"
        className="pl-3 pr-3 mt-7 h-12 text-black outline-none rounded-md w-full"
        placeholder="Enter password"
        value={props.Password}
        onChange={(e) => {
          props.setPassword(e.target.value);
        }}
        style={{
          backgroundColor: " rgba(30, 76, 247, 0.1)",
          fontFamily: "Open sans",
        }}
      ></input>
      {props.invalidPassword != "" && (
        <div className="text-red-500">{props.invalidPassword}</div>
      )}

      <button
        onClick={props.data}
        type="button"
        className="pl-3 pr-3 mt-7 h-12 outline-none rounded-md w-full text-white"
        style={{
          backgroundColor: "#F58220",
          fontFamily: "Open sans",
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default Password;
