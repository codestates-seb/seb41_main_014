/**
 * 토큰 key
 */
const ACCESS_TOKEN = 'accessToken';

/**
 * 토큰불러오기
 * @returns token
 */
export const getTOKEN = () => localStorage.getItem(ACCESS_TOKEN);

/**
 * 토큰저장
 * @param {*} accessToken
 * @returns
 */
export const setTOKEN = (accessToken) =>
  localStorage.setItem(ACCESS_TOKEN, accessToken);

/**
 * 토큰날리기
 */
export const setLOGOUT = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

/**
 * 토큰유효여부
 * @returns boolean
 */
export const getIS_ALIVE = () => !!getTOKEN();
