import { createSlice } from '@reduxjs/toolkit';

// display: size / start: page / sort: sim: 정확도, date: 날짜순
const pageInfo = { query: '', display: 1, start: 1, sort: 'sim' };

const initPageInfo = { hasNext: false, origin: pageInfo };

const searchs = [];

/* {
  title: '',
  link: '',
  image: '',
  lprice: 0,
  hprice: 0,
  mallName: '',
  productId: '',
  productType: '2',
  brand: '',
  maker: '',
  category1: '',
  category2: '',
  category3: '',
  category4: '',
} */

const initSearchs = { origin: searchs };

const initialState = {
  pageInfo: initPageInfo,
  searchs: initSearchs,
};

// 로그인, 로그아웃 리듀서 설정 => 로그인 상태 변경 및 유저 정보 추가 or 초기화
const searchsSlice = createSlice({
  name: 'searchs',
  initialState,
  reducers: {
    setSearchs: (state, action) => {
      state.searchs.origin = action.payload;
    },
    setSearchsPageInfo: (state, action) => {
      state.pageInfo = action.payload;
    },
    setInitSearchs: (state) => {
      state.pageInfo = initPageInfo;
      state.searchs = initSearchs;
    },
  },
});

export const { setSearchs, setSearchsPageInfo, setInitSearchs } =
  searchsSlice.actions;

export default searchsSlice.reducer;
