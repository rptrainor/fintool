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
        'brand': '#1C64F2',
        'brand_light': '#7496FF',
        'brand_lightest': '#EBF5FF',
        'brand_dark': '#0037B9',
        'brand_saturated': '#0454F2',
        'brand_desaturated': '#3474F2',
        'brand_grayscale': '#5E5E5E',
        'brand_complement': '#F2AA1C',
        'brand_yellow_light': '#FDF6B2',
        'brand_yellow_dark': '#723B13',
        'brand_blue_light': '#E2EFFE',
        'brand_blue_dark': '#1E429F',
        'text_primary': '#000A4F',
        'text_secondary': '#5E5E5E',
        'background_primary': '#F6F5F2',
        'background_secondary': '#DEE4F2',
        'background_dark': '#0037B9',
      },
    },
  },
  plugins: [],
};
export default config;
