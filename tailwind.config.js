/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    darkMode:"class",
    lightMode:"class",
    theme: {
    extend: {
      colors: {
        //Light Mode Color Palette
        highlightWord: '#DB7F8E',
        darkhighlightWord: '#248071',
        palePink: '#FFDBDA',
        blackShadows:"#D5C5C8",
        quickSilver:"#9DA3A4",
        darkLiver:"#604D53",
        shimmeringBlush:"#DB7F8E",

        //Dark Mode Colors
        navbarDark:'#272529',
        buttonDark:'#2F4562',
        buttonHoverDark:"#506680",
        
        // Misc
        toggleSwitch:"#ccc",

      },
      backgroundImage: {
        lightBackground: "url(./assets/lightBackground.svg)",
        darkBackground: "url(./assets/darkBackground.svg)",
      }
    },
  },
  plugins: [],
}
