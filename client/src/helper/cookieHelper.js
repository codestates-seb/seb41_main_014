import { Cookies } from 'react-cookie';

//npm -> react-cookie 문서 option

const ACCESS_TOKEN = 'token';
const REFRESH_TOKEN = 'refreshToken';

const cookies = new Cookies();

//토큰설정
export const setACCESS_TOKEN = (token, option = {}) =>
  cookies.set(ACCESS_TOKEN, token, option);
export const setREFRESH_TOKEN = (token, option = {}) =>
  cookies.set(REFRESH_TOKEN, token, option);

//토큰가져오기
export const getACCESS_TOKEN = () => cookies.get(ACCESS_TOKEN);
export const getREFRESH_TOKEN = () => cookies.get(REFRESH_TOKEN);

//토큰날리기
export const removeACCESS_TOKEN = () => cookies.remove(ACCESS_TOKEN);
export const removeREFRESH_TOKEN = () => cookies.remove(REFRESH_TOKEN);

//토큰유무검증 => 바꿔야될수도있음
export const isTOKEN_ALIVE = () => {
  if (getACCESS_TOKEN() && getREFRESH_TOKEN()) return true;
  return false;
};
