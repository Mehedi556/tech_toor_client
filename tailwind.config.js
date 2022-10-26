/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#8de8d8",
        
"secondary": "#30a823",
        
"accent": "#f20487",
        
"neutral": "#24222B",
        
"base-100": "#FDFCFD",
        
"info": "#59ADF3",
        
"success": "#178C7D",
        
"warning": "#E98316",
        
"error": "#ED4A62",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
