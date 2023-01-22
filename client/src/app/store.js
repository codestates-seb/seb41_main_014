import { configureStore } from '@reduxjs/toolkit';
import fixedSavings from '../reducer/fixedSavingsSlice';
import isLoginSlice from '../reducer/isLoginSlice';
import savingConditions from '../reducer/savingConditionsSlice';

// 전역 저장소 설정
const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
    savingConditions: savingConditions,
    fixedSavings: fixedSavings,
  },
});

export default store;
