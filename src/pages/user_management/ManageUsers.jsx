import React from 'react'
import UserList from "../../components/UserList"
import { ReactComponent as UserManagementIcon } from '../../assets/Users.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/ChevronRight.svg';

function ManageUsers() {
  return (
	<div className="flex-col justify-center align-middle">
		<div className="content-path">
			<UserManagementIcon /><span>User Management</span><ChevronRightIcon /><span>List of Users</span>
		</div>
		<UserList/>
	</div>
  )
}

export default ManageUsers