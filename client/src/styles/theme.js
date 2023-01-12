import { createTheme } from '@mui/material';

//TODO 표준 변경원할 때
const STANDARD_FONT_PX = 10;
const STANDARD_MAGNIFICATION = 4;

const calcRem = (px) => `${px / STANDARD_FONT_PX}rem`;

export const theme = createTheme({
  spacing: STANDARD_MAGNIFICATION,
  fontSizes: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
    xxxxl: calcRem(20),
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    heavy: 900,
  },
  colors: {
    mainLight: '#eef1ff',
    mainMiddleLight: '#d2daff',
    mainMiddle: '#aac4ff',
    mainHeavy: '#b1b2ff',
    accent: '#ff6f6f',
    white: 'white',
    black: 'black',
  },
});
