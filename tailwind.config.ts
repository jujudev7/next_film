import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        rougevif: "#eb0000",
      },
      maxWidth: {
        "1400": "1400px", // Ajoute une classe max-w-1500
      },
    },
  },
  plugins: [],
};
export default config;
