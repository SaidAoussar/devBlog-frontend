const colors = {
  accent_brand_rgb: "59, 73, 223",
  accent_brand_darker_rgb: "47, 58, 178",
  accent_brand_lighter_rgb: "80, 99, 301",

  white: "255, 255, 255",
  black: "0, 0, 0",

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
  base: {
    inverted: "rgb(255, 255, 255)",
    100: "#090909",
    90: "#242424",
    80: "#3d3d3d",
    70: "#575757",
    60: "#717171",
    50: "#8a8a8a",
    40: "#a3a3a3",
    30: "#bdbdbd",
    20: "#d6d6d7",
    10: "#efefef",
    0: "#f9f9f9",
  },
};

export const lightTheme = {
  bodyBg: `rgb(${colors.grey[100]})`,
  bodyColor: `rgb(${colors.grey[900]})`,

  cardBg: `rgb(${colors.white})`,
  cardColor: `rgb(${colors.grey[900]})`,
  cardColorSecondary: `rgb(${colors.grey[700]})`,
  cardColorTertiary: `rgb(${colors.grey[600]})`,
  cardBorder: `rgba(${colors.grey[900]},0.1)`,

  headerBg: `rgb(${colors.white})`,
  headerShadow: `rgba(${colors.black},0.1)`,

  linkBg: "transparent",
  linkBgHover: `rgba(${colors.accent_brand_rgb}, 0.1)`,
  linkColor: `rgb(${colors.grey[700]})`,
  linkColorHover: `rgb(${colors.accent_brand_darker_rgb})`,
  linkBrandedColorHover: `rgb(${colors.accent_brand_darker_rgb})`,

  tagColor: `rgb(${colors.grey[700]})`,
  tagColorHover: `rgb(${colors.grey[900]})`,
  tagBg: `rgba(${colors.grey[900]},0.05)`,
  tagBgHover: `rgba(${colors.grey[900]},0.05)`,
  tagPrefix: `rgba(${colors.grey[900]},0.6)`,
  tagPrefixHover: `rgb(${colors.grey[900]})`,

  btnGhostBg: "transparent",
  btnGhostBgHover: "rgba(0, 0, 0, 0.035)",
  btnGhostColor: `${colors.base[80]}`,
  btnGhostColorHover: `${colors.base[100]}`,

  btnBg: "transparent",
  btnBgHover: `rgba(${colors.accent_brand_rgb}, 0.1)`,
  btnColor: `rgb(${colors.grey[800]})`,
  btnColorHover: `rgb(${colors.accent_brand_darker_rgb})`,

  formBg: `rgb(${colors.white})`,
  formBgFocus: `rgb(${colors.white})`,
  formBorder: `rgb(${colors.grey[300]})`,
  formBorderHover: `rgb(${colors.grey[400]})`,
  formBorderFocus: `rgb(${colors.accent_brand_rgb})`,
  formPlaceholderColor: `rgb(${colors.grey[600]})`,
  labelPrimary: `rgb(${colors.grey[900]})`,
  labelSecondary: `rgb(${colors.grey[600]})"`,

  accentBrand: `rgb(${colors.accent_brand_rgb})`,
  focus: `rgb(${colors.accent_brand_rgb})`,

  menuBg: "rgba(0, 0, 0, 0.02)",
  menuColor: "rgba(0, 0, 0, 0.88)",
  menuLinkBorderColor: "#1677ff",

  drawerBg: `rgb(${colors.white})`,
  drawerColor: "rgba(0, 0, 0, 0.88)",

  base: {
    ...colors.base,
  },
};
