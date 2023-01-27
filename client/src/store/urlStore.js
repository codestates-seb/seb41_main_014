import axios from 'axios';
import { getACCESS_TOKEN } from '../helper/cookieHelper';

// const TYPE_DEPLOY = false;
const BASE = process.env.REACT_APP_BASEURL;
const api = process.env.REACT_APP_ENDPOINT;

//endpoint
// const members = process.env.REACT_APP_MEMBER;
// const savings = process.env.REACT_APP_SAVINGS;
// const goals = process.env.REACT_APP_GOALS;
// const interest = process.env.REACT_APP_INTEREST;

// //member
// const logIn = process.env.REACT_APP_MEMBER_LOGIN;
// const signUp = process.env.REACT_APP_MEMBER_SIGNUP;
// const memberInfo = process.env.REACT_APP_MEMBER_INFO;
// const memberEdit = process.env.REACT_APP_MEMBER_EDIT;
// const memberDelete = process.env.REACT_APP_MEMBER_DELETE;

// //savings
// const savingsList = process.env.REACT_APP_SAVINGS_LIST;
// const savingsMyCreate = process.env.REACT_APP_SAVINGS_MY_CREATE;
// const savingsMyList = process.env.REACT_APP_SAVINGS_MY_LIST;
// const savingsMyDelete = process.env.REACT_APP_SAVINGS_MY_DELETE;

//goals
// const goalsCreate = process.env.REACT_APP_GOALS_CREATE;
// const goalsList = process.env.REACT_APP_GOALS_LIST;
// const goalsDetail = process.env.REACT_APP_GOALS_DETAIL;
// const goalsEdit = process.env.REACT_APP_GOALS_EDIT;
// const goalsDelete = process.env.REACT_APP_GOALS_DELETE;
const goalsSearch = process.env.REACT_APP_NAVER_SEARCH;

const getWithToken = () => {
  return {
    Authorization: getACCESS_TOKEN(),
  };
};

const goalsDefault = {
  baseURL: BASE + api,
  headers: {
    ...getWithToken(),
  },
  withCredentials: true,
};

//홍
export const getGOALS_INSTANCE = (data) => {
  return axios.create({
    ...goalsDefault,
    ...data,
  });
};

//method get 기본값
export const getNAVER_SEARCH_INSTACE = (params) => {
  return axios.create({
    ...goalsDefault,
    url: goalsSearch,
    params: params,
  });
};
