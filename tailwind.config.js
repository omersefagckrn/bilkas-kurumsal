/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			colors: {
				primary: '#ff7518',
				appgray: '#7A7A7A',
				appbggray: '#F2F5F9'
			},
			container: {
				padding: '1rem',
				center: true,
				screens: {
					sm: '100%',
					md: '100%',
					lg: '800px',
					xl: '1124px'
				}
			}
		}
	}
};
