const Palette = {
  powderWhite: "#FFFDF9",
  persianGreen: "#00c9a7",
  lightBlue: "#AFDBD2",
  onyx: "#36313D",
  pink: "pink",
  black: "black",
  violetSuperLight: "#fef7ff",
  violetLight: "#845EC2",
  violetDark: "#5c3a99",
  white: "white",
};

export const theme = {
  colors: {
    primaryButtonSuperLightColor: Palette.violetSuperLight,
    primaryButtonLightColor: Palette.violetLight,
    primaryButtonDarkColor: Palette.violetDark,
    secoundaryLightGreen: Palette.persianGreen,
    black: "black",
    background: Palette.white,
    white: "white",
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
  },
  heights: {
    small: "1rem",
    medium: "2rem",
    large: "4rem",
  },
  borders: {
    small: "1px",
    medium: "2px",
    large: "3px",
  },
  bordersRadius: {
    small: "1px",
    medium: "2px",
    large: "4px",
    xlarge: "8px",
  },
  paddings: {
    small: "0.5rem",
    customsmall: "0.625rem",
    medium: "1rem",
    large: "1.5rem",
  },
  margins: {
    xsmall: "0.1rem",
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
  },
  gap: {
    xsmall: "0.2rem",
    small: "0.5rem",
  },
  shadows: {
    normal: `rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px`,
    hover: "",
  },
};
