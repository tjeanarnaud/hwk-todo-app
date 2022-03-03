module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				abel: ['Abel', 'sans-serif'],
				open: ['Open Sans', 'sans-serif'],
				passion: ['Passion One', 'cursive'],
				saira: ['Saira Condensed', 'sans-serif'],
				satisfy: ['Satisfy', 'cursive'],
			},
			colors: {
				black: {
					0: '#000000',
					10: '#000202',
					20: '#000304',
					30: '#000507',
					40: '#00070A',
					50: '#00090D',
					60: '#000C10',
					70: '#000E13',
					75: '#001016',
					80: '#001219',
					85: '#00141C',
					90: '#00161E',
					95: '#001922',
					100: '#001F2B',
				},
				gunmetal: '#1C2A35',
				amazon: '#41764C',
				gold: '#E09200',
				teal: '#00778F',
				ruby: '#9B2226',
			},
		},
	},
	plugins: [],
}
