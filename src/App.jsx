import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


import CreateUser from './pages/user_management/CreateUser';
import Home from './pages/home/Home';
import ManageUsers from './pages/user_management/ManageUsers';
import Login from './pages/login/Login';
import Routed from './Router';
import { useState } from 'react';

function App() {

	const [sessionState, setSessionState] = useState({
		userID: null,
		userEmail: null,
		active: null,
		userName: null,
		userImage: null
	})

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Navigate exact to="/login" />}/>
					<Route path="/login" element={<Login Session={sessionState} SetSession={setSessionState} />} /> 
					<Route path="/session/" element={<Routed Session={sessionState} />} > 
						<Route path="/session/home" element={<Home  />} /> {/* Dashboard Component goes here */}
						<Route path="/session/usermanagement/" element={<ManageUsers />} />
						<Route path="/session/usermanagement/createuser" element={<CreateUser />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
