import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    },
    colors: {
      primaryPink: "#F67ACB",
      primaryDarkPink: "#CF62A9",
      primaryDarkerPink: "#9D457F",
      dark100: "#F5F6FA",
      dark200: "#DFE1E8",
      dark300: "#C0C3CC",
      dark400: "#ABAFBA",
      dark500: "#979BA6",
      dark600: "#787C87",
      dark700: "#5C5F69",
      dark800: "#393B42",
      dark900: "#0A0B0D"
    }
  },
  plugins: []
}
export default config
