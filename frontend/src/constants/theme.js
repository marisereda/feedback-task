export const theme = {
  space: (index) => `${index / 4}rem`,

  sizes: {
    container: "1200px",
    form: "564px",
    button: "218px",
  },

  fonts: {
    primary: "'Apercu Arabic Pro', sans-serif",
  },

  fontSizes: {
    heading: "2.5rem",
    headingMobile: "2.25rem",
    button: "1.125rem",
    input: "1.125rem",
  },

  colors: {
    white: "#ffffff",
    accent: "#fad34f",
    error: "#f472b7",
    heading: "#3e3e3e",
    input: "#2d2d2d",
    placeholder: "#575757",
    footerBg: "#fafafa",
    link: "#696969",
  },

  breakpoints: {
    mobile: "640px",
    tablet: "1024px",
  },

  radii: {
    full: "9999px",
    input: "10px",
  },

  borders: {
    input: "1px solid #dcdcdc",
    footer: "1px solid #d8d8d8",
  },

  shadows: {
    button:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
  },

  animation: {
    default: "200ms",
  },
};
