import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/bg-texture1.svg')",
        hero2: "url('/src/assets/images/Website.svg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#3A66FF",
        secondary: "#9C9DCE"
      },
      screens: {
        xxs: "400px",
        xs: "480px",
        mds: "600px",
        md: "800px",
        lgss: "976px",
        lg: "1200px",
        xxl: "1300px",
        xxxl: "1650px",
      },
    },
  },
  plugins: [],
};
export default config;
