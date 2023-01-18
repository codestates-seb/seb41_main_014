import { createSlice } from '@reduxjs/toolkit';

// 받아오는 유저정보 내용 초기 상태로 등록
// 일단 로그인시 받아오는 정보만 등록했습니당 유저 정보 추가해주세요 (초기값)
const initialUserInfo = { email: '', id: 0, name: '', picture: '' };

const initialState = { isLogin: false, userInfo: initialUserInfo };

// 로그인, 로그아웃 리듀서 설정 => 로그인 상태 변경 및 유저 정보 추가 or 초기화
const isLoginSlice = createSlice({
  name: 'isLogin',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.userInfo = initialUserInfo;
    },
  },
});

export const { login, logout } = isLoginSlice.actions;

export default isLoginSlice.reducer;
