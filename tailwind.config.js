/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
      fontSize: {
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '28px': '28px',
        '32px': '32px',
      },
      backgroundColor: {
        'customBlue': '#615EFF',
      },
      screens: {
        'small': '350px',
        // => @media (min-width: 330px) { ... }

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        'mlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'msm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [require("tw-elements/plugin.cjs")]
};
