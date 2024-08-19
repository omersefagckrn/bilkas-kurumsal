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
				center: true,
				screens: {
					sm: '100%', // Küçük ekranlarda %100 genişlik
					md: '100%', // Orta ekranlarda %100 genişlik
					lg: '800px', // Büyük ekranlarda 800px genişlik
					xl: '1124px', // Çok büyük ekranlarda 1124px genişlik
					'2xl': '1124px' // En büyük ekranlarda da 1124px genişlik
				}
			}
		}
	}
};
