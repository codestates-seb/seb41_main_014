import { createSlice } from '@reduxjs/toolkit';

// 받아오는 유저정보 내용 초기 상태로 등록
// 일단 로그인시 받아오는 정보만 등록했습니당 유저 정보 추가해주세요 (초기값)

//230119 김태윤
//id 0은 유의미하다고 약속된값. 없다의 의미인 -1이나 Math.min or Math.max로 대체
const initialUserInfo = { email: '', id: -1, name: '', picture: '' };

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
