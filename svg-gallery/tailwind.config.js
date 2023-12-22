/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "ct-dark-600": "#222",
      "ct-dark-200": "#575757",
      "ct-dark-100": "#6d6d6d",
      "ct-blue-600": "#ff531a",
      "ct-blue-700": "#e63900",
      "ct-yellow-600": "#f9d13e",
      "dark-brown": "#2F2725",
      "dark-brown-400": "#2f272566",
      "dark-brown-100": "#2f27251a",
      "dark-brown-40": "#2f27250a",
      "blue": "#158CC5",
      "blue-100": "#158cc51a",
      "blue-60": "#158cc50f",
      "blue-40": "#158cc50a",
      "red": "#EC0404",
      "pink": "#FDE2E2",
      "blue-gray": "#3F535E",
      "neutral-gray": "#C7CDD0",
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
