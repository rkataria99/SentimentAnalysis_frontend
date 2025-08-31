/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* 1) Extra-wide breakpoints for 1440/1600/1920/2560+ displays */
      screens: {
        "3xl": "1600px",
        "4xl": "1920px",
        "5xl": "2560px",
      },

      /* 2) Nice soft shadow (kept from your config) */
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.08)",
      },

      /* 3) Responsive container that centers + pads at all sizes */
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.25rem",
          md: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
          "2xl": "3rem",
          "3xl": "3.5rem",
          "4xl": "4rem",
          "5xl": "4.5rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1600px",
          "4xl": "1920px",
          "5xl": "2560px",
        },
      },
    },
  },
  plugins: [],
};
