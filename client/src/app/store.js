import { configureStore } from '@reduxjs/toolkit';
import isLoginSlice from '../reducer/isLoginSlice';

// 전역 저장소 설정
const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
  },
});

export default store;
