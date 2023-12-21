/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      "ct-dark-600": "#222",
      "ct-dark-200": "#575757",
      "ct-dark-100": "#6d6d6d",
      "ct-blue-600": "#ff531a",
      "ct-blue-700": "#e63900",
      "ct-yellow-600": "#f9d13e",
      "bg-40": "#2f27250a",
      "bg-100": "#2f27251a",
      "border-ft-item": "#06050480",
      "border-ft": "#090707",
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1125px",
        xl: "1125px",
        "2xl": "1125px",
        "3xl": "1500px",
      },
    },
  },
};
export const plugins = [];
