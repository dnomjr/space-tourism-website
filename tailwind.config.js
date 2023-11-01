/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
      },
      colors: {
        darkBlue: "rgba(255, 255, 255, 0.04)",
        lightPurple: "hsl(231, 77%, 90%)",
      },
      backgroundImage: {
        homeDesktop: "url('/src/assets/home/background-home-desktop.jpg')",
        homeTablet: "url('/src/assets/home/background-home-tablet.jpg')",
        homeMobile: "url('/src/assets/home/background-home-mobile.jpg')",

        destinationDesktop:
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        destinationTablet:
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        destinationMobile:
          "url('/src/assets/destination/background-destination-mobile.jpg')",

        crewDesktop: "url('/src/assets/crew/background-crew-desktop.jpg')",
        crewTablet: "url('/src/assets/crew/background-crew-tablet.jpg')",
        crewMobile: "url('/src/assets/crew/background-crew-mobile.jpg')",

        technologyDesktop:
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        technologyTablet:
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        technologyMobile:
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      xxl: "1550px",
    },
  },
  plugins: [],
};
