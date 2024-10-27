import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "aciella-script": "var(--font-aciella-script)",
        "adelle-mono": "var(--font-adelle-mono)",
        "adelle-mono-flex": "var(--font-adelle-mono-flex)",
        "afton-james": "var(--font-afton-james)",
        articulat: "var(--font-articulat)",
        asthetic: "var(--font-asthetic)",
        bantayog: "var(--font-bantayog)",
        baurems: "var(--font-baurems)",
        fionas: "var(--font-fionas)",
        gilroy: "var(--font-gilroy)",
        imbue: "var(--font-imbue)",
        lora: "var(--font-lora)",
        "myriad-pro": "var(--font-myriad-pro)",
        "nabire-1943": "var(--font-nabire-1943)",
        soulcraft: "var(--font-soulcraft)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        simmer: {
          white: "rgb(var(--simmer-white))",
          yellow: "rgb(var(--simmer-yellow))"
        }
      }
    }
  },
  plugins: []
};
export default config;
