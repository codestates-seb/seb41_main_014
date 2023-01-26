import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setACCESS_TOKEN, setREFRESH_TOKEN } from '../helper/cookieHelper';
import { login } from '../reducer/isLoginSlice';
import { ROUTE_PATH_BASE } from '../store/routerStore';

const LoginCallback = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 로그인 버튼을 누르고 이동한 URL에서 구글 로그인을 실행하면 이동되는 URL의 파라미터에 두 개의 토큰과 멤버 아이디가 나온다
  // location.href로 그 URL에 다가가서 searchParams를 이용하여 그 값을 추출한다
  const accessToken = new URL(window.location.href).searchParams.get(
    'access_token'
  );
  const refreshToken = new URL(window.location.href).searchParams.get(
    'refresh_token'
  );
  const memberId = new URL(window.location.href).searchParams.get('member_id');

  useEffect(() => {
    // 토큰이 받아졌다면
    if (accessToken && refreshToken) {
      // 토큰을 쿠키에 저장한다.
      setACCESS_TOKEN(accessToken);
      setREFRESH_TOKEN(refreshToken);
      // 멤버 아이디는 일단 사용이 불확실하므로 로컬에 저장만 해둘게요.
      localStorage.setItem('memberId', memberId);

      // 로그인을 통해 받은 토큰을 바로 헤더에 실어 유저 정보를 받아오는 요청을 보냄
      axios(
        `http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com:8080/api/members`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: accessToken,
          },
        }
      ).then((response) => dispatch(login(response.data.data)));
      // {
      //     id: 2,
      //     email: 'iltae94@gmail.com',
      //     name: '김일태',
      //     picture: 'https://lh3.googleusercontent.com/a/AEdFTp58gjnBfNQVFwzSkdfHbZTyXPLe8yIiTnlfJDr95w=s96-c'
      // }
      // 유저 정보가 이 객체 형태로 날라옴
      // 리덕스로 유저 정보 저장 ?

      navigate(ROUTE_PATH_BASE);
    }
  }, []);

  return <></>;
};

export default LoginCallback;
