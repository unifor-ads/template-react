import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';
import './App.css';

import { Navbar } from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Faq from './assets/pages/Faq';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' Component={Home} />
				<Route path='/faq' Component={Faq} />
			</Routes>
		</Router>
	);
}

export default App;
