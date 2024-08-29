// tailwind.config.js
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  theme: {
    extend: {
      backgroundImage: {
        "login-bg": "url('/src/assets/loginbg.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  }
};
