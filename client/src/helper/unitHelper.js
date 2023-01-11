const BASE_LOCALE = 'ko-KR';

export const getLOCALE_MONEY = (money = 0) =>
  money.toLocaleString(BASE_LOCALE, { maximumFractionDigits: 4 });
