import { createSlice } from '@reduxjs/toolkit';
import { getFS_BANKS } from '../helper/fixedSavingHelper';

// title, unit, value
const monthlySavings = {
  fixed: {
    title: '월 저축금액',
    unit: '원',
  },
  value: 0,
};

// title, data, value
const saveTrm = {
  fixed: {
    title: '저축 희망 기간',
    data: [
      { title: '6개월', value: 6 },
      { title: '12개월', value: 12 },
      { title: '24개월', value: 24 },
      { title: '36개월', value: 36 },
    ],
  },
  value: 6,
};

// title, unit, value
const finishSavings = {
  fixed: {
    title: '총 저축금액',
    unit: '원',
  },
  value: 0,
};

// title, data, value
const rsrvType = {
  fixed: {
    title: '적립방식',
    data: [
      { title: '전체', value: -1 },
      { title: '정액적립식', value: 'S' },
      { title: '자유적립식', value: 'F' },
    ],
  },
  value: -1,
};

const fixedBanks = getFS_BANKS();
const getCheckeds = () => new Array(fixedBanks.length).fill(false);

const banks = {
  fixed: {
    title: '주 거래은행',
    data: fixedBanks,
  },
  isCheckeds: getCheckeds(),
};

// title, data, value
const intrRateType = {
  fixed: {
    title: '이자계산방식',
    data: [
      { title: '전체', value: -1 },
      { title: '단리', value: 'S' },
      { title: '복리', value: 'M' },
    ],
  },
  value: -1,
};

// title, data, value
const joinDeny = {
  fixed: {
    title: '가입대상',
    data: [
      { title: '전체', value: -1 },
      { title: '제한없음', value: 1 },
      { title: '서민전용', value: 2 },
      { title: '일부제한', value: 3 },
    ],
  },
  value: -1,
};

const initialState = {
  monthlySavings,
  saveTrm,
  finishSavings,
  rsrvType,
  banks,
  intrRateType,
  joinDeny,
  isSearch: false,
};

const savingConditions = createSlice({
  name: 'savingConditions',
  initialState,
  reducers: {
    setMonthlySavings: (state, action) => {
      state.monthlySavings.value = action.payload;
    },
    setSaveTrm: (state, action) => {
      state.saveTrm.value = action.payload;
    },
    setFinishSavings: (state, action) => {
      state.finishSavings.value = action.payload;
    },
    setRsrvType: (state, action) => {
      state.rsrvType.value = action.payload;
    },
    setBankCheckeds: (state, action) => {
      state.banks.isCheckeds = action.payload;
    },
    setIntrRateType: (state, action) => {
      state.intrRateType.value = action.payload;
    },
    setJoinDeny: (state, action) => {
      state.joinDeny.value = action.payload;
    },
  },
});

export const {
  setMonthlySavings,
  setSaveTrm,
  setFinishSavings,
  setRsrvType,
  setBankCheckeds,
  setIntrRateType,
  setJoinDeny,
} = savingConditions.actions;

export default savingConditions.reducer;
