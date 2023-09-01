import React, { useState } from 'react';

import './navbar.css';

import { Logo } from './Logo';

export const Navbar = () => {
	const [theme, setTheme] = useState('dark');

	const toggleTheme = () => {
		const rootElement = document.getElementById('root');
		if (!rootElement) return;

		if (theme === 'dark') {
			rootElement.setAttribute('data-bs-theme', 'light');
			setTheme('light');
		} else {
			rootElement.setAttribute('data-bs-theme', 'dark');
			setTheme('dark');
		}
	};

	return (
		<nav className='navbar component navbar-expand-lg bg-body-tertiary'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='/'>
					<Logo />
					<span className='mx-2'>Spotifei</span>
				</a>
				<button
					className='navbar-toggler nav-button'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<i className='bi bi-list'></i>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item' key='faq'>
							<a className='nav-link active' aria-current='page' href='faq'>
								FAQ
							</a>
						</li>
					</ul>

					<a className='theme-mode dark-mode mx-3' onClick={toggleTheme}>
						<i className='bi bi-moon-stars-fill'></i>
					</a>

					<form className='d-flex' role='login'>
						<a className='btn nav-button mx-2' type='submit' href='signin'>
							Entrar
						</a>
					</form>
				</div>
			</div>
		</nav>
	);
};
