const colors = {
  accent_brand_rgb: "59, 73, 223",
  accent_brand_darker_rgb: "47, 58, 178",
  accent_brand_lighter_rgb: "129, 140, 248",

  black: "0, 0, 0",
  white: "255, 255, 255",

  grey: {
    50: "250, 250, 250",
    100: "245, 245, 245",
    200: "229, 229, 229",
    300: "212, 212, 212",
    400: "163, 163, 163",
    500: "115, 115, 115",
    600: "82, 82, 82",
    700: "64, 64, 64",
    800: "38, 38, 38",
    900: "23, 23, 23",
  },

  indigo: {
    300: "165, 180, 252",
    900: "49, 46, 129",
  },
  base: {
    inverted: "#000",
    100: "#f9f9f9",
    90: "#efefef",
    80: "#d6d6d7",
    70: "#bdbdbd",
    60: "#a3a3a3",
    50: "#8a8a8a",
    40: "#717171",
    30: "#575757",
    20: "#3d3d3d",
    10: "#242424",
    0: "#090909",
  },
};

export const DarkTheme = {
  bodyBg: `rgb(${colors.dark})`,
  bodyColor: `rgb(${colors.grey[50]})`,

  cardBg: `rgb(${colors.grey[900]})`,
  cardColor: `rgb(${colors.grey[50]})`,
  cardColorSecondary: `rgb(${colors.grey[300]})`,
  cardColorTertiary: `rgb(${colors.grey[400]})`,
  cardBorder: `rgba(${colors.white},0.15)`,

  headerBg: `rgb(${colors.grey[900]})`,
  headerShadow: `rgba(${colors.black},0.1)`,

  linkBg: "transparent",
  linkBgHover: `rgba(${colors.indigo[900]}, 0.75)`,
  linkColor: `rgb(${colors.grey[300]})`,
  linkColorHover: `rgb(${colors.indigo[300]})`,
  linkBrandedColorHover: `rgb(${colors.indigo[300]})`,

  tagColor: `rgb(${colors.grey[300]})`,
  tagColorHover: `rgb(${colors.grey[100]})`,
  tagBg: `rgba(${colors.grey[50]},0.05)`,
  tagBgHover: `rgba(${colors.grey[50]},0.05)`,
  tagPrefix: `rgba(${colors.grey[50]},0.6)`,
  tagPrefixHover: `rgb(${colors.grey[50]})`,

  btnGhostBg: "transparent",
  btnGhostBgHover: "rgba(255, 255, 255, 0.035)",
  btnGhostColor: `${colors.base[80]}`,
  btnGhostColorHover: `${colors.base[100]}`,

  btnBg: "transparent",
  btnBgHover: `rgba(${colors.indigo[900]}, 0.75)`,
  btnColor: `rgb(${colors.grey[300]})`,
  btnColorHover: `rgb(${colors.indigo[300]})`,

  formBg: `rgb(${colors.black})`,
  formBgFocus: `rgb(${colors.black})`,
  formBorder: `rgb(${colors.grey[700]})`,
  formBorderHover: `rgb(${colors.grey[600]})`,
  formBorderFocus: `rgb(${colors.accent_brand_lighter_rgb})`,
  formPlaceholderColor: `rgb(${colors.grey[600]})`,
  labelPrimary: `rgb(${colors.grey[50]})`,
  labelSecondary: `rgb(${colors.grey[30]})"`,

  accentBrand: `rgb(${colors.accent_brand_rgb})`,
  focus: `rgb(${colors.accent_brand_lighter_rgb})`,

  menuBg: "rgba(0, 0, 0, 0.02)",
  menuColor: `rgb(${colors.grey[50]})`,
  menuLinkBorderColor: `rgb(${colors.grey[50]})`,

  drawerBg: `rgb(${colors.black})`,
  drawerColor: `rgb(${colors.grey[50]})`,
  base: {
    ...colors.base,
  },
};
