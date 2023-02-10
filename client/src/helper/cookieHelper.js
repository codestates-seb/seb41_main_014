import { Cookies } from 'react-cookie';

//npm -> react-cookie 문서 option

const ACCESS_TOKEN = 'token';
const REFRESH_TOKEN = 'refreshToken';
const USER_INFORMATION = 'userInformation';

const cookies = new Cookies();

//토큰설정
export const setACCESS_TOKEN = (token, option = {}) =>
  cookies.set(ACCESS_TOKEN, token, option);
export const setREFRESH_TOKEN = (token, option = {}) =>
  cookies.set(REFRESH_TOKEN, token, option);
export const setUSER_INFORMATION = (userInformation, option = {}) =>
  cookies.set(USER_INFORMATION, userInformation, option);

//토큰가져오기
export const getACCESS_TOKEN = () => cookies.get(ACCESS_TOKEN);
export const getREFRESH_TOKEN = () => cookies.get(REFRESH_TOKEN);
export const getUSER_INFORMATION = () => cookies.get(USER_INFORMATION);

//토큰날리기
export const removeACCESS_TOKEN = () => cookies.remove(ACCESS_TOKEN);
export const removeREFRESH_TOKEN = () => cookies.remove(REFRESH_TOKEN);
export const removeUSER_INFORMATION = () => cookies.remove(USER_INFORMATION);

export const getALIVE = () =>
  getACCESS_TOKEN() && getREFRESH_TOKEN() && getUSER_INFORMATION();

export const setLogout = () => {
  removeACCESS_TOKEN();
  removeREFRESH_TOKEN();
  removeUSER_INFORMATION();
};
