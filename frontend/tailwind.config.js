/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        pinkish: "#ff6583",
        bluish: "#6c63ff",
        dark: "#0d0d1a",
        dark2: "#12122a",
        dark3: "#1a1a35",
        dark4: "#22223f",
        card: "#1e1e3a",
      },
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
        floatUp: "floatUp 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        spin3d: "spin3d 8s linear infinite",
      },
      keyframes: {
        beat: {
          "0%": { width: "0%", opacity: "1" },
          "50%": { width: "30%", opacity: "1" },
          "100%": { width: "0%", opacity: "1" },
        },
        hove: {
          "0%": { width: "10%", opacity: "1" },
          "100%": { width: "40%", opacity: "1" },
        },
        opac: {
          "0%": { height: "5%", opacity: "0" },
          "100%": { height: "55%", opacity: "1" },
        },
        high: {
          "0%": { height: "5%" },
          "100%": { height: "50%" },
        },
        inp: {
          "0%": { width: "10%" },
          "100%": { width: "100%" },
        },
        inpp: {
          "0%": { width: "5%" },
          "100%": { width: "40%" },
        },
        opa: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        headerlanding: {
          "0%": { right: "0%", opacity: "0" },
          "100%": { right: "-70%", opacity: "1" },
        },
        headerlanding2: {
          "0%": { right: "-500%", opacity: "0" },
          "100%": { right: "-86%", opacity: "1" },
        },
        floatUp: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        spin3d: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      screens: {
        "max-sm": { max: "375px" },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-game': 'linear-gradient(135deg, #0d0d1a 0%, #1a1a35 100%)',
      },
      boxShadow: {
        'glow-pink': '0 0 20px rgba(255, 101, 131, 0.4)',
        'glow-blue': '0 0 20px rgba(108, 99, 255, 0.4)',
        'glow-pink-lg': '0 0 40px rgba(255, 101, 131, 0.5)',
        'glow-blue-lg': '0 0 40px rgba(108, 99, 255, 0.5)',
      },
    },
  },
  plugins: [],
};
