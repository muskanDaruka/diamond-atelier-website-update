
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,mdx}",
    "./src/components/**/*.{js,jsx,mdx}",
    "./src/app/**/*.{js,jsx,mdx}",
    "./src/layout/**/*.{js,jsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)',"sans-serif"],
        ebgaramond: ["var(--font-ebgaramond)", "Georgia", "serif"],
        montserratClassic: ["Montserrat Classic", "sans-serif"],
        arimo: ["var(--font-arimo)", "sans-serif"],
        migra: ["var(--font-migra)", "serif"],
        oldstandardtt: ["Old Standard TT", "serif"], 
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} 
