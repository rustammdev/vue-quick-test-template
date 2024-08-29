// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/assets/loginbg.jpg')",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      extend: {
        container: {
          center: true,
          padding: {
            DEFAULT: "20px",
            lg: "80px",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
