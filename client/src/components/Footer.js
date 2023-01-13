import styled from '@emotion/styled';

const StyeldFooter = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #b1b2ff;
  position: relative;
  bottom: 0;
  transform: translatY(-100%);
`;

const Footer = () => {
  return <StyeldFooter>푸터푸터푸터</StyeldFooter>;
};

export default Footer;
