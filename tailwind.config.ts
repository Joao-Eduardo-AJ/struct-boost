import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontSize: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.375rem"
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
