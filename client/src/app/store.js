import { configureStore } from '@reduxjs/toolkit';
import fixedSavingsSlice from '../reducer/fixedSavingsSlice';
import goalCreateSlice from '../reducer/goalCreateSlice';
import modalSlice from '../reducer/modalSlice';
import savingConditionsSlice from '../reducer/savingConditionsSlice';

// 전역 저장소 설정
const store = configureStore({
  reducer: {
    goalCreate: goalCreateSlice,
    savingConditions: savingConditionsSlice,
    fixedSavings: fixedSavingsSlice,
    modal: modalSlice,
  },
});

export default store;
