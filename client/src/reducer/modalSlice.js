import { createSlice } from '@reduxjs/toolkit';

export const MODAL_TYPE_MAIN_MENU = 10001;
export const MODAL_TYPE_SEARCH = 10002;

const initialState = { type: MODAL_TYPE_MAIN_MENU, open: false };

// 로그인, 로그아웃 리듀서 설정 => 로그인 상태 변경 및 유저 정보 추가 or 초기화
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalType: (state, action) => {
      state.type = action.payload;
    },
    setModalClose: (state) => {
      state.open = false;
    },
    setModalOpen: (state) => {
      state.open = true;
    },
  },
});

export const { setModalType, setModalClose, setModalOpen } = modalSlice.actions;

export default modalSlice.reducer;
