/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      "white-smoke": "#ececec",
      "white-smoke-2": "#efefef",
      "white-smoke-4": "#f3f1f0",
      "white-smoke-5": "#f7f7f7",
      "neutral-50-501": "#f5f6fa",
      "blue-throughput-case-study": "#efefef",
      black: "#000",
      "neutral-1": "#e1e3e8",
      "neutral-2": "#b8becc",
      "neutral-3": "#959ba6",
      "neutral-4": "#616773",
      "neutral-5": "#2d3340",
      "neutral-6": "#242933",
      "neutral-7": "#171a21",
      "neutral-8": "#171a21",
      "neutral-9": "#0f1115",
      grey: "#757575",
      silver: "#d6d6d5",
      616773: "#6d6d72",
      "dim-grey-2": "#6d6d72",
      "dark-grey": "#9d9d9e",
      "dark-grey-2": "#949494",
      "dim-grey": "#1b1b1b",
      "black-dark-grey": "#333",
      "primary-light": "#49ffe6",
      "primary-dark": "#39c6b3",
      "medium-aquamarine": "#62c3a9",
      "teal-4": "#1fc6af",
      "cadet-blue": "#5cb0b6",
      "pale-turquoise": "#befef7",
      khaki: "#fedf71",
      "orange-smoke-3": "#f5ca47",
      "orange-3": "#ffab00",
      "orange-2": "#eea645",
      blue: "#4d06e8",
      "medium-slate-blue": "#6e68ec",
      "royal-blue": "#2868e5",
    },
  },
  plugins: [require("daisyui")],
};
