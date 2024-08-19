/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff7518',
				appgray: '#7A7A7A',
				appbggray: '#F2F5F9'
			},
			container: {
				screens: {
					sm: '100%',
					md: '100%',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1436px'
				}
			}
		}
	}
};
