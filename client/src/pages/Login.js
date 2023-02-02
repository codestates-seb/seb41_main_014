import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import { Container, styled } from '@mui/material';
import { URL_MEMBER_SINGUP } from '../store/urlStore';
import loginLogo from '../asset/images/login_2023.png';

const LoginContainer = styled(Container)`
  margin-top: 10vh;
  height: 60vh;
  text-align: center;
  img {
    width: 60%;
  }
`;

const GoogleLogin = styled(Button)`
  width: 45%;
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
        <img src={loginLogo} alt="2023" />
        <GoogleLogin href={URL_MEMBER_SINGUP} variant="contained">
          <GoogleIcon />
          <div>구글로 로그인하기</div>
        </GoogleLogin>
      </LoginContainer>
    </>
  );
};

export default Login;
