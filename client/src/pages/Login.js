import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Container, styled } from '@mui/material';

const LoginContainer = styled(Container)`
  background-color: ${(props) => props.theme.colors.mainLight};
  height: 80vh;
  margin-top: 8px;
`;

const GoogleLogin = styled(Button)`
  margin-top: 37vh;
  width: 100%;
  height: 6vh;
  div {
    margin-left: 4px;
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <GoogleLogin
          href="http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"
          variant="contained"
        >
          <GoogleIcon />
          <div>구글로 로그인하기</div>
        </GoogleLogin>
      </LoginContainer>
    </>
  );
};

export default Login;
