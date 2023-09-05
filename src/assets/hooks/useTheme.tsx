import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useTheme = () => {
	// Lê o tema do cookie imediatamente
	const initialTheme = Cookies.get('theme') || 'dark';
	const [theme, setTheme] = useState(initialTheme);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		Cookies.set('theme', newTheme, { expires: 365 }); // Salva o tema como um cookie válido por um ano
	};

	useEffect(() => {
		document.documentElement.setAttribute('data-bs-theme', theme);

		document.documentElement.style.setProperty(
			'--background-color',
			theme === 'light' ? 'white' : '#171717',
		);
		document.documentElement.style.setProperty(
			'--navbar-background-color',
			theme === 'light' ? '#dee4ea' : '#2B3035',
		);
		// Aqui você pode aplicar outras propriedades de estilo conforme necessário
	}, [theme]);

	return { theme, toggleTheme };
};

export default useTheme;
