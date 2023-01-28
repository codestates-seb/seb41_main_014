import { createSlice } from '@reduxjs/toolkit';

const initFixedSavings = [];

const pageInfomation = {
  page: 1,
  size: 10,
  totalElements: -1,
  totalPages: -1,
};

const pageInfo = {
  origin: pageInfomation,
  hasMore: false,
};

const initialState = { origin: initFixedSavings, extendableId: -1, pageInfo };

// 로그인, 로그아웃 리듀서 설정 => 로그인 상태 변경 및 유저 정보 추가 or 초기화
const fixedSavingsSlice = createSlice({
  name: 'fixedSavings',
  initialState,
  reducers: {
    setFixedSavings: (state, action) => {
      state.origin = action.payload;
    },
    setFixedSavingsInit: (state) => {
      state.origin = initFixedSavings;
    },
    setFixedSavingsIsExtendable: (state, action) => {
      state.extendableId = action.payload;
    },
    setFixedSavingsPageInfo: (state, action) => {
      state.pageInfo = action.payload;
    },
  },
});

export const {
  setFixedSavings,
  setFixedSavingsInit,
  setFixedSavingsIsExtendable,
  setFixedSavingsPageInfo,
} = fixedSavingsSlice.actions;

export default fixedSavingsSlice.reducer;