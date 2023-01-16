const BASE_LOCALE = 'ko-KR';

export const getLOCALE_MONEY = (money = 0) =>
  money.toLocaleString(BASE_LOCALE, { maximumFractionDigits: 4 });

export const getPERCENT_WITH_TEXT = (num = 0) => `${num}%`;
