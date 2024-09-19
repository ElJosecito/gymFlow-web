/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1F68F6",
        secondary: "#011632",
        darkblue: "#0C1524",
        back_white: "#f4f4f4",
      },
      animation: {
				'infinite-scroll': 'infinite-scroll 120s linear infinite',
        'infinite-inverse-scroll': 'inverse-infinite-scroll 120s linear infinite',
        
			},
			keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
        'inverse-infinite-scroll': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
			},
    },
  },
  plugins: [],
}