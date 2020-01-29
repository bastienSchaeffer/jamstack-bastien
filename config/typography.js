import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.6875,
  googleFonts: [
    {
      name: "Ubuntu",
      styles: ["400"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Ubuntu", "sans-serif"],
  bodyFontFamily: ["Open Sans", "sans-serif"],
  headerColor: "hsla(0,0%,0%,1)",
  bodyColor: "hsla(0,0%,0%,0.9)",
  headerWeight: 400,
  bodyWeight: 400,
  boldWeight: 400,
  scaleRatio: 2.5,
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
