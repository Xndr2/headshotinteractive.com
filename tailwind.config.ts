import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        'home-image-1': "url('/HomeImages/planet.jpg')",
        'home-image-2': "url('/HomeImages/orb.jpg')",
        'home-image-3': "url('/HomeImages/Teaser.jpg')",
        'home-image-4': "url('/HomeImages/Menu.jpg')",
        'home-image-5': "url('/HomeImages/Helios.png')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
