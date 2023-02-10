import { createSlice } from '@reduxjs/toolkit';
import { getFS_BANKS } from '../helper/fixedSavingHelper';
import { getLOCALE_MONEY } from '../helper/unitHelper';

// title, unit, value
const monthlySavings = {
  fixed: {
    title: '월 저축금액',
    unit: '원',
  },
  value: 10000,
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
  value: '60,000',
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
  isSelectedValue: 0,
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

const initSavingConditions = {
  monthlySavings,
  saveTrm,
  finishSavings,
  rsrvType,
  banks,
  intrRateType,
  joinDeny,
};

const initialState = {
  origin: initSavingConditions,
  isSearch: false,
};

const savingConditionsSlice = createSlice({
  name: 'savingConditions',
  initialState,
  reducers: {
    setConditionsInit: (state) => {
      state.origin.monthlySavings.value = 10000;
      state.origin.saveTrm.value = 6;
      state.origin.finishSavings.value = getLOCALE_MONEY(60000);
      state.origin.rsrvType.value = -1;
      state.origin.banks.isCheckeds = getCheckeds();
      state.origin.intrRateType.value = -1;
      state.origin.value = -1;
      state.isSearch = false;
    },
    setMonthlySavings: (state, action) => {
      state.origin.monthlySavings.value = action.payload;
    },
    setSaveTrm: (state, action) => {
      state.origin.saveTrm.value = action.payload;
    },
    setFinishSavings: (state, action) => {
      state.origin.finishSavings.value = action.payload;
    },
    setRsrvType: (state, action) => {
      state.origin.rsrvType.value = action.payload;
    },
    setBanksInit: (state) => {
      state.origin.banks = banks;
    },
    setBankCheckeds: (state, action) => {
      state.origin.banks.isCheckeds = action.payload;
    },
    setBankSelectedValue: (state, action) => {
      state.origin.banks.isSelectedValue = action.payload;
    },
    setBankSelectedValueInit: (state) => {
      state.origin.banks.isSelectedValue = banks.isSelectedValue;
    },
    setIntrRateType: (state, action) => {
      state.origin.intrRateType.value = action.payload;
    },
    setJoinDeny: (state, action) => {
      state.origin.joinDeny.value = action.payload;
    },
    setIsSearch: (state, action) => {
      state.isSearch = action.payload;
    },
  },
});

export const {
  setConditionsInit,
  setMonthlySavings,
  setSaveTrm,
  setFinishSavings,
  setRsrvType,
  setBankCheckeds,
  setBankSelectedValue,
  setBankSelectedValueInit,
  setIntrRateType,
  setJoinDeny,
  setIsSearch,
} = savingConditionsSlice.actions;

export default savingConditionsSlice.reducer;
