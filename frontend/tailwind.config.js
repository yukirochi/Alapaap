/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        borderBeat: "beat 1s linear infinite",
        hoveBeat: "hove 0.5s linear",
        opact: "opac 0.2s linear",
        inp: "inp 0.5s ease",
        opa: "opa 0.8s linear",
        inpp: "inpp 0.3s ease",
        lead: "high 0.4s ease",
        headlan: "headerlanding 0.5s ease",
        headlan2: "headerlanding2 0.7s ease",
        playnav: "inp 3s ease",
        playnav2: "opa 3s ease",
      },
      keyframes: {
        beat: {
          "0%": {
            width: "0%",
            opacity: "1",
          },
          "50%": {
            width: "30%",
            opacity: "1",
          },
          "100%": {
            width: "0%",
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
        opac: {
          "0%": {
            height: "5%",
            opacity: "0",
          },
          "100%": {
            height: "55%",
            opacity: "1",
          },
        },
        high: {
          "0%": {
            height: "5%",
          },
          "100%": {
            height: "50%",
          },
        },
        inp: {
          "0%": {
            width: "10%",
          },
          "100%": {
            width: "100%",
          },
        },
        inpp: {
          "0%": {
            width: "5%",
          },
          "100%": {
            width: "40%",
          },
        },
        opa: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        headerlanding: {
          "0%": {
            right: "0%",
            opacity: "0",
          },
          "100%": {
            right: "-70%",
            opacity: "1",
          },
        },
        headerlanding2: {
          "0%": {
            right: "-500%",
            opacity: "0",
          },
          "100%": {
            right: "-86%",
            opacity: "1",
          },
        },
      },
      screens: {
        "max-sm": { max: "375px" },
      },
      colors: {
        pinkish: "#ff6583",
        bluish: "#6c63ff",
      },
    },
  },
  plugins: [],
};
