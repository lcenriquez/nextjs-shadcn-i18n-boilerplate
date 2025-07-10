/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
	theme: {
		extend: {
			colors: {
				// Remove auralia color palette and use generic color names if needed
			}
		}
	},
	plugins: []
};
