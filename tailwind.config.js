/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth: {
        card: "28rem",
      },
      colors: {
        white: "hsl(0, 0%, 100%)",
        Light_grayish_violet: "hsl(270, 3%, 87%)",
        Dark_grayish_violet: "hsl(279, 6%, 55%)",
        Very_dark_violet: "hsl(278, 68%, 11%)",
      },
    },
    fontFamily: {
      space: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".custom-label": {
          "@apply block mb-2 text-[0.95rem] tracking-[2.5px]": true,
        },
        ".error": {
          "@apply invisible text-xs text-red-600 mt-[0.2rem]": true,
        },
      });
    },
  ],
};
