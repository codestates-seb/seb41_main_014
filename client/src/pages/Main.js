import { Container, styled } from '@mui/material';
import Button from '@mui/material/Button';
import { getACCESS_TOKEN } from '../helper/cookieHelper';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.basic.getDistance(100)};
  background-color: ${(props) => props.theme.colors.mainMiddle};
`;

const Main = () => {
  console.log(getACCESS_TOKEN());
  return (
    <Container>
      <StyledButton variant="contained">하하하</StyledButton>
    </Container>
  );
};

export default Main;
