import { configureStore } from '@reduxjs/toolkit';
import fixedSavingsSlice from '../reducer/fixedSavingsSlice';
import isLoginSlice from '../reducer/isLoginSlice';
import modalSlice from '../reducer/modaSlice';
import savingConditionsSlice from '../reducer/savingConditionsSlice';

// 전역 저장소 설정
const store = configureStore({
  reducer: {
    isLogin: isLoginSlice,
    savingConditions: savingConditionsSlice,
    fixedSavings: fixedSavingsSlice,
    modal: modalSlice,
  },
});

export default store;
