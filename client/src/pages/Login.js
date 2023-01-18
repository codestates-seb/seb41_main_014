import { styled } from '@mui/material/styles';
// 아이콘 불러오는데 왜 자꾸 오류가 뜰까요...
// import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';


const GoogleLogin = styled(Button)`
  padding: ${(props) => props.theme.spacing(2)};
  margin: ${(props) => props.theme.spacing(1)};
`;

const Login = () => {
  return (
    <>
        <GoogleLogin href="http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/">
          구글로 로그인하기
        </GoogleLogin>
    </>
  );
};

export default Login;
