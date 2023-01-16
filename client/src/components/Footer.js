import { Box, styled } from '@mui/material';

const StyeldFooter = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: theme.spacing(50),
  backgroundColor: theme.colors.mainHeavy,
}));

const Footer = () => {
  return <StyeldFooter as="footer">푸터푸터푸터</StyeldFooter>;
};

export default Footer;
