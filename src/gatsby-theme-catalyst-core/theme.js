// See https://theme-ui.com/ for more info and also https://www.gatsbyjs.org/docs/theme-ui/
// Try changing some of the colors below to see what happens.
import { tailwind, baseColors } from "@theme-ui/preset-tailwind"
import prism from "@theme-ui/prism/presets/oceanic-next"
import "typeface-raleway"

export default {
  useColorSchemeMediaQuery: true,
  ...tailwind,
  breakpoints: ["580px", "768px", "1200px", "1440px"],
  fonts: {
    ...tailwind.fonts,
    body: "Raleway, sans-serif",
    siteTitle: "inherit", // Font for main site title
    navLinks: "inherit", // Font for the nav menu links
    alt: "inherit", //An alternate font style if needed.
  },
  colors: {
    ...tailwind.colors,
    primary: baseColors.orange[7],
    primaryHover: baseColors.orange[8],
    secondary: baseColors.orange[6],
    accent: "#9ce5f4",
    textBlack: baseColors.gray[8],
    textWhite: baseColors.gray[1],
    codeBg: baseColors.gray[9],
    header: {
      background: "#9ce5f4",
      backgroundOpen: "#2e7da4",
      text: baseColors.gray[8],
      textOpen: baseColors.gray[1],
      icons: baseColors.gray[8],
      iconsHover: baseColors.orange[7],
      iconsOpen: baseColors.gray[1],
    },
    footer: {
      background: "#9ce5f4",
      text: baseColors.gray[8],
      links: baseColors.gray[8],
      icons: baseColors.gray[8],
    },
    modes: {
      dark: {
        text: baseColors.gray[1],
        background: baseColors.gray[9],
        primary: baseColors.orange[7],
        secondary: baseColors.orange[6],
        accent: "#00616f",
        gray: baseColors.gray[5],
        muted: baseColors.gray[8],
        codeBg: baseColors.gray[8],
        header: {
          background: "#00616f",
          backgroundOpen: "#324b50",
          text: baseColors.gray[1],
          textOpen: baseColors.gray[1],
          icons: baseColors.gray[1],
          iconsHover: baseColors.orange[7],
          iconsOpen: baseColors.gray[1],
        },
        footer: {
          background: "#00616f",
          text: baseColors.gray[1],
          links: baseColors.gray[1],
          icons: baseColors.gray[1],
        },
      },
    },
  },
  sizes: {
    ...tailwind.sizes,
    maxPageWidth: "1440px", // Sets the max width of elements like the header/footer on really large screens
    maxContentWidth: "720px", // Sets the container size on larger screens, e.g. tablets and laptops
    contentWidth: "90vw", // Sets the container width on smaller screens, results in a 5vw margin on the left and right
    headerHeight: "auto", // Provides fallback setting to control header height
    logoWidthXS: "61px", // Logo width on extra small screens, up to 480px
    logoWidthS: "76px", // Logo width on small screens, 480px - 768px
    logoWidthM: "76px", // Logo width on medium screens, 768px - 1024px
    logoWidthL: "92px", // Logo width on large screens, 1024px - 1440px
    logoWidthXL: "92px", // Logo width on extra large screens, above 1440px
    logoHeightXS: "40px", // Logo height on extra small screens, up to 480px
    logoHeightS: "50px", // Logo height on small screens, 480px - 768px
    logoHeightM: "50px", // Logo height on medium screens, 768px - 1024px
    logoHeightL: "60px", // Logo height on large screens, 1024px - 1440px
    logoHeightXL: "60px", // Logo height on extra large screens, above 1440px
    iconsFooter: "32px", // Sets the icons size for the footer
    iconsHeader: "20px", // Sets the icons size for the header
  },
  styles: {
    ...tailwind.styles,
    Layout: {
      backgroundColor: "background",
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 2,
    },
    blockquote: {
      bg: "muted",
      p: 3,
      borderLeft: "5px solid",
      borderColor: "primary",
    },
    inlineCode: {
      ...prism,
      fontSize: 1,
      p: 1,
      backgroundColor: "muted",
      color: "text",
    },
    pre: {
      ...prism,
      fontSize: 1,
      p: 3,
      overflowX: "auto",
      backgroundColor: "codeBg",
    },
  },
  buttons: {
    primary: {
      bg: "primary",
      color: "textWhite",
      borderRadius: "default",
      transition: "all 0.3s ease 0s",
      "::after": {
        content: '"\\00A0 \\2192"',
      },
      ":hover": {
        bg: "primaryHover",
      },
    },
    secondary: {
      bg: "transparent",
      color: "primary",
      borderColor: "primary",
      borderStyle: "solid",
      borderWidth: "2px",
      borderRadius: "default",
      transition: "all 0.3s ease 0s",
      "::after": {
        content: '"\\00A0 \\2192"',
      },
      ":hover": {
        bg: baseColors.gray[1],
      },
    },
    alt: {
      bg: "transparent",
      border: "none",
      color: "primary",
      fontWeight: "bold",
      letterSpacing: "wider",
      px: 0,
      m: 0,
      transition: "all 0.3s ease 0s",
      "::after": {
        content: '"\\00A0 \\2192"',
      },
      ":hover": {
        textDecoration: "underline",
        bg: "transparent",
        border: "none",
      },
    },
  },
  variants: {
    main: {
      my: 0,
    },
    postListContainer: {
      my: 5,
    },
  },
}