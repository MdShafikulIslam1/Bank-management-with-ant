import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20b757",
        background: "#f5f8fe",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
  // important: true,
  plugins: [],
};
export default config;
