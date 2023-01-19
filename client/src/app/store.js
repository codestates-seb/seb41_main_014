import { configureStore } from '@reduxjs/toolkit';
import isLoginSlice from '../reducer/isLoginSlice';
import savingConditions from '../reducer/savingConditions';

// 전역 저장소 설정
const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
    savingConditions: savingConditions,
  },
});

export default store;
