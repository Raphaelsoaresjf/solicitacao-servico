import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Provider from './components/Login/Store/Provider';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register/';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Router>
		<Provider>
			<Routes>
				<Route path='/' element={<Login/>} />
				{/* <Route path='/home' element={<PrivateRoute/>} /> */}
				<Route path='/home' element={<Home/>} />
				<Route path='/register' element={<Register/>} />
			</Routes>
		</Provider>
	</Router>,
);