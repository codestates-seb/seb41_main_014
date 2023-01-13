import { styled } from '@mui/material';
import Button from '@mui/material/Button';
import { getACCESS_TOKEN } from '../helper/cookieHelper';

const StyledButton = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Main = () => {
  console.log(getACCESS_TOKEN());
  return (
    <>
      <StyledButton variant="contained">하하하</StyledButton>
    </>
  );
};

export default Main;
