/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FFFFFF",
          text: "#FFFFFF",
        },
        secondary: {
          default: "#1A1A1A",
          text: "#1A1A1A",
          dark: "#000000",
        },
        tertiary: {
          default: "#525252",
        },
        accent: {
          royalBlue: "#4169E1", // A strong, dependable blue for a professional look
          sunsetOrange: "#FF4500", // A bold orange for energy and enthusiasm
          teal: "#008080", // A balanced teal for trust and tranquility
          rubyRed: "#9B111E", // A deep red for passion and luxury
          oliveGreen: "#808000", // A muted green for a grounded and earthy feel
          champagne: "#F7E7CE", // A soft, elegant champagne for subtle highlights
          steelGray: "#4682B4", // A cool gray-blue for a modern, clean appearance
          default: "#E97451", // A warm, inviting brown for a homey feel
          navy: "#000080", // A classic navy for a strong, reliable tone
          amethyst: "#9966CC", // A lighter purple for a touch of sophistication
          forestGreen: "#228B22", // A rich green for a natural and calming effect
          mustard: "#FFDB58", // A vibrant mustard yellow for a bold pop of color
        },
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
