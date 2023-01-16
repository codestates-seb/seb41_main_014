import { createTheme, css } from '@mui/material';

//TODO 표준 변경원할 때
const STANDARD_FONT_PX = 10;
const STANDARD_MAGNIFICATION = 4;

const calcRem = (px) => `${px / STANDARD_FONT_PX}rem`;

export const theme = createTheme({
  spacing: STANDARD_MAGNIFICATION,
  rem: (px) => calcRem(px),
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
  palette: {
    type: 'light',
    primary: {
      main: '#b1b2ff',
    },
    secondary: {
      main: '#aac4ff',
    },
    text: {
      primary: 'rgba(0,0,0,0.8)',
      secondary: 'rgba(0,0,0,0.5)',
      disabled: 'rgba(0,0,0,0.4)',
      hint: 'rgba(0,0,0,0.3)',
    },
    error: {
      main: '#ff6f6f',
    },
    warning: {
      main: '#ff3e00',
    },
    info: {
      main: '#1d96f9',
    },
    success: {
      main: '#53c557',
    },
    divider: 'rgba(0,0,0,0.1)',
  },
  typography: {
    fontFamily: 'Noto Sans',
    fontSize: 10,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.6rem',
    },
    h6: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '1.2rem',
      fontWeight: 300,
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 300,
    },
    body1: {
      fontSize: '1.4rem',
    },
    body2: {
      fontSize: '1.2rem',
    },
    button: {
      fontSize: '1.4rem',
      fontWeight: 600,
    },
    caption: {
      fontSize: '1.4rem',
    },
    overline: {
      fontSize: '1.4rem',
    },
    fontWeightLight: 300,
    htmlFontSize: 10,
  },
  shape: {
    borderRadius: 4,
  },
});

export const row = css`
  display: flex;
`;

export const column = css`
  ${row}
  flex-direction: column;
`;

export const rowCenter = css`
  ${row}
  justify-content: center;
`;

export const columnCenter = css`
  ${column}
  align-items: center;
`;
