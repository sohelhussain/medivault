/** @type {import('tailwindcss').Config} */
const config = require("../../packages/tailwind-config/tailwind.config");

module.exports = {
  ...config,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "!../../**/node_modules", // explicitly exclude node_modules
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}", // scoped to actual UI source files
  ]
};