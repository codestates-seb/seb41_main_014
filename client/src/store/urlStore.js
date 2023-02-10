import { getACCESS_TOKEN, getREFRESH_TOKEN } from '../helper/cookieHelper';

// const TYPE_DEPLOY = false;
const base = process.env.REACT_APP_BASEURL;
const api = process.env.REACT_APP_ENDPOINT;

//endpoint
const members = process.env.REACT_APP_MEMBER;
const savings = process.env.REACT_APP_SAVINGS;
const goals = process.env.REACT_APP_GOALS;
const interest = process.env.REACT_APP_INTEREST;

// //member
const logIn = process.env.REACT_APP_MEMBER_LOGIN;
const signUp = process.env.REACT_APP_MEMBER_SIGNUP;
const logout = process.env.REACT_APP_MEMBER_LOGOUT;

const goalsSearch = process.env.REACT_APP_NAVER_SEARCH;

export const getWITH_PARAMS = (params) => {
  return {
    params: params,
  };
};

export const getWITH_TOKEN = (params) => {
  return {
    ...getWITH_PARAMS(params),
    headers: {
      Authorization: getACCESS_TOKEN(),
      RefreshToken: getREFRESH_TOKEN(),
    },
    withCredentials: true,
  };
};

export const URL_MEMBER_LOGIN = `${base}${logIn}`;
export const URL_MEMBER_SINGUP = `${base}${signUp}`;
export const URL_MEMBER = `${base}${api}${members}`;
export const URL_MEMBER_LOGOUT = `${URL_MEMBER}${logout}`;

const urlGOALS = `${base}${api}${goals}`;
export const getURL_GOALS = (goalID) =>
  `${urlGOALS}${goalID ? `/${goalID}` : ''}`;

export const URL_NAVER_SEARCH = `${base}${api}${goalsSearch}`;

export const URL_SAVINGS = `${base}${api}${savings}`;

const urlSAVINGS_INTEREST = `${URL_SAVINGS}${interest}`;
export const getURL_SAVINGS_INTEREST = (savingID) =>
  `${urlSAVINGS_INTEREST}${savingID ? `/${savingID}` : ''}`;
