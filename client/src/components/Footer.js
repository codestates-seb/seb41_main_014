import { styled } from '@mui/material';
import { RowCenterContainer } from '../styles/common';

const StyeldFooter = styled(RowCenterContainer)(({ theme }) => ({
  width: '100vw',
  height: theme.spacing(50),
  backgroundColor: theme.colors.mainHeavy,
}));

const Footer = () => {
  return <StyeldFooter as="footer">푸터푸터푸터</StyeldFooter>;
};

export default Footer;
