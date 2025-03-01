/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        "smx": "600px",
        "mdx": "909px",
        "lgx": "1105px",
        "fsm": "100px",
        "flg": "1173px",
        "txtlg": "856px"
      },
      animation: {
        spin: 'spin 3s linear infinite',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      maxHeight: {
        "400": "500px",
      },
      height: {
        "700": "700px",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
