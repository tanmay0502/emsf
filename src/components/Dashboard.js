import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";


const Dashboard = (props) => {
    const f1={
        fontStyle:"Open sans",
        
    };
    const data=[0,1,2,3,4,5,6,7,8];
  return (
    <div className="">
      <Navbar />
      <div
        className="table bg-neutral-300 h-full rounded-lg p-14 w-3/5 absolute right-16"
        style={{ marginTop: "25px" }}
      >
        <div className="flex justify-between">
          <p className="text-black" >Users</p>
          <p className="text-black text-sm">Logged in as: CEO Office</p>
        </div>
        <div className="table w-full">
          <div className="head flex justify-between w-full bg-neutral-100 p-2 rounded-md mt-4">
            <p className="text-black font-semibold" style={f1}>
              User Id
            </p>
            <p className="text-black font-semibold " style={f1}>
              Name
            </p>
            <p className="text-black font-semibold" style={f1}>
              Role
            </p>
            <p className="text-black font-semibold" style={f1}>
              Type
            </p>
          </div>
          <div className="tableBody">
            {data.map((value) => (
              <div className="row flex justify-between w-full bg-neutral-100 p-3 rounded-md mt-2">
                <p className="text-black text-sm" style={f1}>
                  User Id
                </p>
                <p className="text-black text-sm " style={f1}>
                  Name
                </p>
                <p className="text-black text-sm" style={f1}>
                  Role
                </p>
                <p className="text-black text-sm" style={f1}>
                  Type
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end mt-2">
            <button className="bg-blue-900 p-2 rounded-md text-white " >
              Add User
            </button>
          </div>
        </div>
      </div>
      <SideMenu />
    </div>
  );
};

export default Dashboard;
