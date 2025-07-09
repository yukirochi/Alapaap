/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        borderBeat: "beat 1s linear infinite",
        hoveBeat: "hove 0.5s linear"
      },
      keyframes: {
        beat: {
          "0%": {
            width: "10%",
            opacity: "1",
          },  
          "50%": {
            width: "30%",
            opacity: "1",
          },
          "100%": {
            width: "10%",
            opacity: "1",
          },
        },
        hove: {
          "0%": {
            width: "10%",
            opacity: "1",
          },  
          "100%": {
            width: "40%",
            opacity: "1",
          },
         
        },
      },
    },
  },
  plugins: [],
};
