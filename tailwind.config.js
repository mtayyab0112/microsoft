module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          btnTextBorderColor: "var(--btn-text-border-color)",
        },
      },
      textColor: {
        skin: {
          headingColor: "var(--heading-color)",
          desColor: "var(--description-color)",
          btnColor: "var(--btn-text-color)",
        },
      },

      backgroundColor: {
        skin: {
          detailBG: "var(--detail-bg)",
          btnBgColor: "var(--btn-bg-color)",
          btnHoverBg: "var(--btn-hover-color)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
