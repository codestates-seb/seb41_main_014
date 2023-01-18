// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   monthlySavings: {
//     title: '월 저축금액',
//     unit: '원',
//     value: 0,
//   },
//   saveTrm: {
//     title: '저축 희망 기간',
//     data: [
//       { title: '6개월', value: 6 },
//       { title: '12개월', value: 12 },
//       { title: '24개월', value: 24 },
//       { title: '36개월', value: 36 },
//     ],
//     value: 6,
//   },
//   finishSavings: {
//     title: '총 저축금액',
//     unit: '원',
//     value: 0,
//   },
//   rsrvType: {
//     title: '적립방식',
//     data: [
//       { title: '전체', value: null },
//       { title: '정액적립식', value: 'S' },
//       { title: '자유적립식', value: 'F' },
//     ],
//     value: null,
//   },
//   banks: getFS_BANKS(),
//   intrRateType: {
//     title: '이자계산방식',
//     data: [
//       { title: '전체', value: null },
//       { title: '단리', value: 'S' },
//       { title: '복리', value: 'M' },
//     ],
//     value: null,
//   },
//   joinDeny: {
//     title: '가입대상',
//     data: [
//       { title: '전체', value: 0 },
//       { title: '제한없음', value: 1 },
//       { title: '서민전용', value: 2 },
//       { title: '일부제한', value: 3 },
//     ],
//     value: 0,
//   },
// };

// const savingCondition = createSlice({
//     name: 'savingConditions',
//     initialState,
//     reducers: {
//         setMonthlySavings: (state, action) => {

//         },
//     }
// })