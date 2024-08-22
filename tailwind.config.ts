import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            "blue-primary": "#1DA1F2",
            "dark-1": "#17202A",
            "dark-2": "#1C2733",
            "dark-3": "#283340",
            "dark-4": "#3A444C",
            "dark-5": "#5B7083",
            "dark-6": "#8899A6",
            "dark-7": "#EBEEF0",
            "dark-8": "#F7F9FA",
        }
    },
    plugins: [],
};
export default config;
