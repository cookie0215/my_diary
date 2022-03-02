// px단위 대신 rem으로 설정하고 싶을 때 사용
const calcRem = (size) => `${size / 16}rem`;

const font = {
  family: {
    base: 'Katuri',
    write: 'Mugunghwa',
  },
  size: {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  black: "#222222",
  white: "#FFFFFF",
  red: "#FC0000",
  grayLight: "#f6f6f6",
  gray: "#64646F",
  yellow: "#FFDA55",
  yellowLight: "#FFF9E4",
};

const deviceSizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "450px",
  tablet: "768px",
  tabletL: "1024px",
  desktop: "1440px",
};

const device = {
  mobileS: `screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  tabletL: `screen and (max-width: ${deviceSizes.tabletL})`,
  desktop: `screen and (max-width: ${deviceSizes.desktop})`,
};

const theme = {
  font,
  colors,
  deviceSizes,
  device,
};

export default theme;