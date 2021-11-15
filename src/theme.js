import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { 
  mono: `'Menlo', monospace`,
  heading: `'Ubuntu'`,
  body: `'Josefin Sans'`
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const globalStyles = {
  body: {
    lineHeight: "90%",
    letterSpacing:"0.05em",
    fontSize: "20px",
    textAlign: "justify",
    width: "100%"
  }
}

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,    
  },
  styles: {
    global: globalStyles
  },
  colors: {
    black: '#16161D',
  },
  fonts,
  breakpoints,
  icons: {
    logo: {
      path: (
        <svg
          width="3000"
          height="3163"
          viewBox="0 0 3000 3163"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="3000" height="3162.95" fill="none" />
          <path
            d="M1470.89 1448.81L2170 2488.19H820V706.392H2170L1470.89 1448.81ZM1408.21 1515.37L909.196 2045.3V2393.46H1998.84L1408.21 1515.37Z"
            fill="currentColor"
          />
        </svg>
      ),
      viewBox: '0 0 3000 3163',
    },
  },
  mdx: {
    h1: {
      mt: "2rem",
      mb: ".25rem",
      lineHeight: 1.2,
      fontWeight: "bold",
      fontSize: "2.175rem",
      letterSpacing: "-.025em",
    },
    h2: {
      mt: "4rem",
      mb: "0.5rem",
      lineHeight: 1.3,
      fontWeight: "semibold",
      fontSize: "2.2rem",
      letterSpacing: ".025em",
      "& + h3": {
        mt: "1.5rem",
      },
    },
    h3: {
      mt: "3rem",
      // mb: "0.5rem",
      lineHeight: 1.25,
      fontWeight: "semibold",
      fontSize: "1.8rem",
      letterSpacing: ".025em",
    },
    h4: {
      mt: "3rem",
      lineHeight: 1.375,
      fontWeight: "semibold",
      fontSize: "1.125rem",
    },
    a: {
      color: "teal.500",
      fontWeight: "semibold",
      transition: "color 0.15s",
      transitionTimingFunction: "ease-out",
      _hover: {
        color: "teal.600",
      },
      textDecoration: "underline solid 3px",
      textUnderlineOffset: "3px"
    },
    p: {
      mt: "1.25rem",
      lineHeight: 1.4,
      "blockquote &": {
        mt: 0,
      },
    },
    hr: {
      my: "4rem",
    },
    blockquote: {
      bg: "orange.100",
      borderWidth: "1px",
      borderColor: "orange.200",
      rounded: "lg",
      px: "1.25rem",
      py: "1rem",
      my: "1.5rem",
    },
    ul: {
      mt: "1.5rem",
      ml: "2.5rem",
      lineHeight: 1.5,
      "blockquote &": { mt: 0 },
      "& > * + *": {
        mt: "0.25rem",
      },
    },
    code: {
      rounded: "sm",
      px: "1",
      fontSize: "0.875em",
      py: "2px",
      whiteSpace: "nowrap",
      lineHeight: "normal",
    },
  },

})

export default theme
