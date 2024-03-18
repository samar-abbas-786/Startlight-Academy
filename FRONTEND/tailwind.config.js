/**
 *
 * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

// const { nextui } = require("@nextui-org/react");

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     // single component styles
//     "./node_modules/@nextui-org/theme/dist/components/button.js",
//     // or you can use a glob pattern (multiple component styles)
//     './node_modules/@nextui-org/theme/dist/components/(button|snippet|code|input).js'
//   ],
//   theme: {
//     extend: {},
//   },
//   darkMode: "class",
//   plugins: [nextui()],
// };
