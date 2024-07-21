module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        light_green: { 900: "#3a5b22" },
        blue_gray: { 50: "#edf2f7", 100: "#d9d9d9", 500: "#74758e" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        indigo: { 900: "#0c2991", A700: "#0f3cde" },
        white: { A700: "#ffffff" },
        gray: { 50: "#fafafa", 100: "#f5f5f5" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter" },
      boxShadow: {
        bs: "0px 1px  1px 0px #0000003f",
        bs1: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
