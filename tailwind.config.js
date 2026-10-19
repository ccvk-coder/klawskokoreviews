export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#3A3A3A",
        gold: "#A8842F",
        fallback: "#6F6F72",
        facebook: "#0866FF",
      },
      fontFamily: {
        sans: [
          "ui-rounded",
          '"SF Pro Rounded"',
          '"Nunito"',
          '"Segoe UI"',
          "system-ui",
          "-apple-system",
          "Roboto",
          "sans-serif",
        ],
        display: [
          '"Didot"',
          '"Bodoni 72"',
          '"Bodoni MT"',
          '"Playfair Display"',
          '"Cormorant Garamond"',
          '"Iowan Old Style"',
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
      },
    },
  },
};
