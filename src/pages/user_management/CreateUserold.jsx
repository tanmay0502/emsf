import React from 'react'
import { useState } from 'react'
import './styles/createuser.css'
import { ReactComponent as UserManagementIcon } from '../../assets/Users.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/ChevronRight.svg';



function CreateUser() {
  const [isTemporary, setIsTemporary] = useState(false);
  const [frs, setFrs] = useState();
  const [UserId,setUserId] = useState("")
  const [UserName,setUserName] = useState("")
  // const [UserPassword,setUserPassword] = useState("")
  const [UserEmail,setUserEmail] = useState("")
  const [UserMobile,setUserMobile] = useState("")
  const [UserAddress,setUserAddress] = useState("")
  const [UserAltContact1,setUserAltContact1] = useState("")
  const [UserAltContact2,setUserAltContact2] = useState("")
  const [UserImage,setUserImage] = useState("")

  // const [PasswordHash,setPasswordHash] = useState("")
  const onFormSubmit = (e) => {
    e.preventDefault();

    setUserId(document.getElementById("formUserID").value);
    setUserName(document.getElementById("formUserName").value);
    // setUserPassword(document.getElementById("formUserPassword").value);
    setUserEmail(document.getElementById("formUserEmail").value);
    setUserMobile(document.getElementById("formUserMobileNumber").value);
    setUserAddress(document.getElementById("formUserAddress").value);
    setUserAltContact1(document.getElementById("formUserAltNumber1").value);
    setUserAltContact2(document.getElementById("formUserAltNumber2").value);
    setUserImage(document.getElementById("formUserImage").files[0]);

    // setPasswordHash(UserPassword); // Generate Password hash here
    var fr = new FileReader();
    fr.onload = () => {
      setFrs(fr.result);
      const ReqJSON = {
        userID: UserId,
        email: UserEmail,
        name: UserName,
        mobilenumber: UserMobile,
        address: UserAddress,
        othercontactnum1: UserAltContact1,
        othercontactnum2: UserAltContact2,
        active: "string",
        // "activationtime": "2022-09-13T18:43:47.135Z",
        photofilename: fr.result,
        // "createdby": "string",
        // "creationtime": "2022-09-13T18:43:47.135Z",
        // passwordhash: PasswordHash,
      };
      addUser(ReqJSON); // Perform API Call here
      console.log(ReqJSON);
      document.getElementById("createUserForm").reset();
    };
    fr.readAsDataURL(UserImage);
  };

  async function addUser(ReqJSON) {
    try {
      const response = await fetch(
        "http://evm.iitbhilai.ac.in:8000/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: UserId,
            email: UserEmail,
            name: UserName,
            mobilenumber: UserMobile,
            address: UserAddress,
            othercontactnum1: UserAltContact1,
            othercontactnum2: UserAltContact2,
            active: "string",
            activationtime: "2022-09-14T17:14:33.658Z",
            photofilename: frs,
            createdby: "string",
            creationtime: "2022-09-14T17:14:33.658Z",
            // passwordhash: PasswordHash,
          }),
        }
      );
      const data2 = await response.json();
      console.log(data2);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="create-user-container">
      <div className="content-path">
        <UserManagementIcon />
        <a href="/usermanagement">User Management</a>
        <ChevronRightIcon />
        <span>Create User</span>
      </div>
      <h4>User Details</h4>
      <div>
        <form
          id="createUserForm"
          onSubmit={onFormSubmit}
          className="form-container"
        >
          <div className="submit-area">
            <input type={"submit"} value="Submit" />
          </div>
          <div className="div3 label">Type:</div>
          <div className="div4 label">Name:</div>
          <div className="div5 label">Email Address:</div>
          <div className=" label">Address:</div>
          <div className="div6 label">User Image:</div>
          <div className="div12 label">User ID:</div>
          {/* <div className="div13 label">Password:</div> */}
          <div className="div13 label">Mobile Number:</div>
          <div className="div14 label">Alt Contact 1:</div>
          <div className="div15 label">Alt Contact 2:</div>

          <div className="div7">
            <select
              id="user-type"
              required={true}
              onChange={(e) => {
                setIsTemporary(e.target.selectedIndex === 1);
              }}
            >
              <option value="permanent">Permanent User</option>
              <option value="temporary">Temporary User</option>
            </select>
          </div>

          <div className="div17">
            <input
              id="formUserID"
              pattern="[a-zA-Z][a-zA-Z]\d\d\d\d\d[a-zA-Z][a-zA-Z][a-zA-Z]"
              required={!isTemporary}
              disabled={isTemporary}
              type={"text"}
              placeholder="SSPPAAARRR"
            />
          </div>

          <div className="div8">
            <input
              id="formUserName"
              required={true}
              type={"text"}
              placeholder="Full Name"
            />
          </div>

          {/* <div className="div18">

          </div> */}

          <div className="div9">
            <input
              id="formUserEmail"
              type={"email"}
              placeholder="xyz@example.com"
            />
          </div>

          <div className="div18">
            <input
              id="formUserMobileNumber"
              required={true}
              pattern="^\d{10}"
              type={"tel"}
              placeholder="00000 00000"
            />
          </div>

          <div className="div10">
            <input
              id="formUserAddress"
              required={true}
              type={"text"}
              placeholder="Address"
            />
          </div>

          <div className="div19">
            <input
              id="formUserAltNumber1"
              type={"tel"}
              pattern="^\d{10}"
              placeholder="00000 00000"
            />
          </div>

          <div className="div11">
            <input
              id="formUserImage"
              required={isTemporary}
              type="file"
              placeholder="Choose Image (Upto 5 MB)"
            />
          </div>

          <div className="div20">
            <input
              id="formUserAltNumber2"
              type={"tel"}
              pattern="^\d{10}"
              placeholder="00000 00000"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser