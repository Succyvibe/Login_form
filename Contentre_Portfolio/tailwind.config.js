module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#dcf6f3',
        secondary: '#4fd1c5',
        darkGreen: "#102A27",
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        borderGrey: 'rgba(70,72,83,.2549019607843137)',
        textMuted: '#24262c',
        footerHover: 'rgb(29, 77, 71)',

      }
    },
  },
  plugins: [],
}
