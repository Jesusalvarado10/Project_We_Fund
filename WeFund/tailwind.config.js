/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        customPurple: '#AF47D2',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

