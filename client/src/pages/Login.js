import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Container, styled } from '@mui/material';
import loginLogo from '../asset/images/login_2023.png';

const LoginContainer = styled(Container)`
  margin-top: 20vh;
  height: 60vh;
  text-align: center;
  img {
    width: 80%;
  }
`;

const GoogleLogin = styled(Button)`
  width: 55%;
  height: 5vh;
  color: ${(props) => props.theme.colors.white};
  margin-top: 8px;
  div {
    margin-left: 4px;
  }
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <img src={loginLogo} alt="로그인그림" />
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
