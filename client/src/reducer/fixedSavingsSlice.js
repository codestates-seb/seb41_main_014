import { createSlice } from '@reduxjs/toolkit';

const initFixedSavings = [];

const initPageInfomation = {
  page: 1,
  size: 10,
  totalElements: -1,
  totalPages: -1,
};

const initPageInfo = {
  origin: initPageInfomation,
  hasMore: false,
};

const initialState = {
  origin: initFixedSavings,
  extendableId: -1,
  pageInfo: initPageInfo,
  isLoading: false,
};

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
      state.pageInfo = initPageInfo;
      state.extendableId = -1;
    },
    setFixedSavingsIsExtendable: (state, action) => {
      state.extendableId = action.payload;
    },
    setFixedSavingsPageInfo: (state, action) => {
      state.pageInfo = action.payload;
    },
    setFixedSavingsIsStartLaoding: (state) => {
      state.isLoading = true;
    },
    setFixedSavingsIsFinishLaoding: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  setFixedSavings,
  setFixedSavingsInit,
  setFixedSavingsIsExtendable,
  setFixedSavingsPageInfo,
  setFixedSavingsIsStartLaoding,
  setFixedSavingsIsFinishLaoding,
} = fixedSavingsSlice.actions;

export default fixedSavingsSlice.reducer;
