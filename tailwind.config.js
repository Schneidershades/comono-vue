module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008AFF",
        secondary: " #A000FF",
        notoften: "#F8FCFF",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      spacing: {
        180: "700px",
        90: "360px",
      },
    },
  },
  plugins: [],
}