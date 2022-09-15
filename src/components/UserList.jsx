import React from 'react'
import { useState,useEffect } from "react";

function UserList() {

	const [users,setUsers]=useState([]);
	 async function getUser() {
     try {
       const response = await fetch(
         "http://evm.iitbhilai.ac.in:8000/listAllUsers",
         {
           method: "GET",
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       const data2 = await response.json();
       console.log(data2);
	   setUsers(data2)
     } catch (err) {
       console.log(err);
     }
   }
   // getUser();
   useEffect(() => {
     getUser();
   }, []);

	return (
    <div className="">
      <div
        className="table h-full w-full p-10 right-16 bg-white box-border"
        style={{ marginTop: "10px", borderRadius: "var(--border-radius)" }}
      >
        <div className="flex justify-between">
          <p className="text-black">Users</p>
          <p className="text-black text-sm">Logged in as: CEO Office</p>
        </div>
        <div className="table w-full">
          <div className="head flex justify-between w-full bg-f2 p-2 px-9 rounded-md mt-4">
            <p className="text-black font-semibold">User Id</p>
            <p className="text-black font-semibold ">Name</p>
            <p className="text-black font-semibold">Role</p>
            <p className="text-black font-semibold">Type</p>
          </div>
          <div
            className="tableBody"
            style={{ overflow: "auto", maxHeight: "55vh" }}
          >
            {users.map((value) => (
              <div
                className="row flex justify-between w-full bg-f2 p-3 px-10 mt-2"
                style={{
                  background: "var(--background-gray)",
                  borderRadius: "var(--border-radius)",
                }}
              >
                <p className="text-black text-sm">
                  {value[0]}
                </p>
                <p className="text-black text-sm">
                  {value[2]}
                </p>
                <p className="text-black text-sm">
                  {value[0]}
                </p>
                <p className="text-black text-sm">
                  {value[7]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-2">
        <button
          onClick={() => {
            window.location.pathname = "/session/usermanagement/createUser";
          }}
        >
          Add User
        </button>
      </div>
    </div>
  );
}
export default UserList