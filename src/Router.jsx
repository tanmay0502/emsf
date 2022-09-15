import React from 'react'
import { Outlet } from 'react-router-dom'
import ECIIcon from './assets/eci_logo.png';
import {ReactComponent as HomeIcon} from './assets/Home.svg';
import {ReactComponent as UserManagementIcon} from './assets/Users.svg';
import {ReactComponent as OrderManagementIcon} from './assets/Order.svg';
import {ReactComponent as UnitManagementIcon} from './assets/UnitManagement.svg';
import {ReactComponent as WarehouseManagementIcon} from './assets/WarehouseManagement.svg';
import {ReactComponent as IssueRequestManagementIcon} from './assets/Issue-RequestManagement.svg';
import {ReactComponent as OtherServicesIcon} from './assets/OtherServices.svg';
import {ReactComponent as ConsumableManagementIcon} from './assets/ConsumableManagement.svg';
import {ReactComponent as LogoutIcon} from './assets/Logout.svg';
import { useEffect } from 'react';
import { useState } from 'react';

function Routed(props) {

	const [userData, setUserData] = useState({
		username: null
	})

	const fetchUserData = async (userid) =>{
		const response = await fetch(
			`http://evm.iitbhilai.ac.in:8000/getNameFromUserID/${userid}`,
			{
			  method: "GET",
			  headers: {
				"Content-Type": "application/json",
			  },
	
			}
		  );
		  return await response.json().then(val => val.name);
	}

	useEffect(() => {


	  if( sessionStorage.getItem('sessionToken') === null ){
		window.location.href = '/login'
	  }

	  fetchUserData(sessionStorage.getItem('sessionToken')).then((val)=> {
		setUserData({
			username: val
		})
	  })
	  
	
	  return () => {
		
	  }
	}, [])
	

  return (
	<div className="App">
			<header className="App-header">
				<img className='App-Icon' src={ECIIcon} />
				EVM Management System
			</header>
			<main>
				<div className="nav-panel">
					<div className="nav-panel-top">
						<span>Welcome, {userData.username}</span>
						<button className='nav-button' onClick={()=>{
							window.location.href = "/session/home" 
						}}>
						 	<HomeIcon />Home
						</button>
						<button className='nav-button' onClick={()=>{
							window.location.href = "/session/usermanagement" 
						}}>
						 	<UserManagementIcon />User Management
						</button>
						<button className='nav-button'>
						 	<OrderManagementIcon />Order Management
						</button>
						<button className='nav-button'>
						 	<UnitManagementIcon />Unit Management
						</button>
						<button className='nav-button'>
						 	<WarehouseManagementIcon />Warehouse Management
						</button>
						<button className='nav-button'>
						 	<IssueRequestManagementIcon />Issue/Request Management
						</button>
						<button className='nav-button'>
						 	<OtherServicesIcon />Other Services
						</button>
						<button className='nav-button'>
						 	<ConsumableManagementIcon />Consumable Management
						</button>
					</div>
					<div className="nav-panel-bottom">
						<button className='nav-button' onClick={()=>{
							sessionStorage.removeItem('sessionToken')
							window.location.href = '/'
						}}>
						 	<LogoutIcon />Logout
						</button>
					</div>
				</div>
				<div className="content-area">
					<div className="content">
						<Outlet />
					</div>
				</div>
			</main>
		</div>
  )
}

export default Routed