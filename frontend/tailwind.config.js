/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                azulmeli: "#3483FA",
                "azulmeli-dark": "#2968C8",
                "azulmeli-darker": "#303070",
                "azulmeli-light": "#ECF3FC",
                amarillomeli: "#FFE600",
            },
        },
    },
    plugins: [daisyui],
};
