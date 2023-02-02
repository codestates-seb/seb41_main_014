import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  setACCESS_TOKEN,
  setREFRESH_TOKEN,
  setUSER_INFORMATION,
} from '../helper/cookieHelper';
import { ROUTE_PATH_BASE } from '../store/routerStore';
import { URL_MEMBER, getWITH_TOKEN } from '../store/urlStore';
import { useSnackbar } from 'notistack';
import { getERROR_TEXT } from '../helper/axiosHelper';

const LoginCallback = () => {
  const navigate = useNavigate();

  // 로그인 버튼을 누르고 이동한 URL에서 구글 로그인을 실행하면 이동되는 URL의 파라미터에 두 개의 토큰과 멤버 아이디가 나온다
  // location.href로 그 URL에 다가가서 searchParams를 이용하여 그 값을 추출한다
  const accessToken = new URL(window.location.href).searchParams.get(
    'access_token'
  );
  const refreshToken = new URL(window.location.href).searchParams.get(
    'refresh_token'
  );
  // const memberId = new URL(window.location.href).searchParams.get('member_id');

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    // 토큰이 받아졌다면
    if (accessToken && refreshToken) {
      // 토큰을 쿠키에 저장한다.
      setACCESS_TOKEN(accessToken);
      setREFRESH_TOKEN(refreshToken);
      // 로그인을 통해 받은 토큰을 바로 헤더에 실어 유저 정보를 받아오는 요청을 보냄
      axios
        .get(URL_MEMBER, getWITH_TOKEN())
        .then((response) => {
          enqueueSnackbar('성공', { variant: 'success' });
          const { data } = response;
          setUSER_INFORMATION(data.data);
          navigate(ROUTE_PATH_BASE);
        })
        .catch((error) => {
          const { message } = error;
          enqueueSnackbar(getERROR_TEXT(Number(message.slice(-3))), {
            variant: 'error',
          });
          navigate(ROUTE_PATH_BASE);
        });
    }
  }, []);

  return <></>;
};

export default LoginCallback;
