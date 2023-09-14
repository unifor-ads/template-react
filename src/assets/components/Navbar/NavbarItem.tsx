interface navbarItemProps {
	children: React.ReactNode;
	href: string;
}

export const NavbarItem = ({ children, href }: navbarItemProps) => {
	return (
		<li className='nav-item' key='faq'>
			<a className='nav-link' aria-current='page' href={href}>
				{children}
			</a>
		</li>
	);
};
