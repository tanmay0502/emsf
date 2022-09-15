import React from "react";
import { useState } from "react";
const Footer = (props) => {
    const mystyle={
        fontFamily: 'Nunito Sans',
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "16px",
        color:"white",
        lineHeight: "29px",
    }
  return (
    <div className="p-1 flex absolute w-full " style={{ backgroundColor: "#357AA2" }}>
      <div className="absolute ml-5 mb-6 mt-5">
        <h2 style={mystyle} className="mt-3">
          EVM Management System
        </h2>
      </div>
      <div className="w-full">
        <h2 style={mystyle} className="mt-3 text-center ">
          <a href="">User Manual</a> | <a href="">tech support</a> | <a href="">About EMS</a> | <a href="">Terms & Conditions</a>
        </h2>
        <br></br>
        <h2 style={mystyle} className="-mt-4 text-center ">
          <a href="">Privacy Policy</a> | <a href="">Usage Agreement</a>
        </h2>
        <h2 style={mystyle} className="text-center text-slate-200">copyright@2022Election Commission of india</h2>
      </div>
    </div>
  );
};

export default Footer;
