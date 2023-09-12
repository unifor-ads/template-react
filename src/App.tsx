import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import './App.css';

import Navbar from './assets/components/Navbar';

import Home from './assets/pages/Home';
import SignIn from './assets/pages/SignIn';
import Faq from './assets/pages/Faq';
import Player from './assets/pages/Player';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/faq' Component={Faq} />
				<Route path='/signin' Component={SignIn} />
				<Route path='/player' Component={Player} />
			</Routes>
		</Router>
	);
}

export default App;
