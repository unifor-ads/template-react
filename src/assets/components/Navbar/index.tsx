import './navbar.css'

export const Navbar = () => {
	return (
		<nav className='navbar bg-dark fluid'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					<img
						src='images/nav-logo.png'
						alt='Logo'
						width='32'
						height='32'
						className='d-inline-block align-text-top'
					/>
					<span className='mx-2'>Spotifei</span>
				</a>
			</div>
		</nav>
	)
}