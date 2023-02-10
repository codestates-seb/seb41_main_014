const BASE_LOCALE = 'ko-KR';

export const getLOCALE_MONEY = (money) => money.toLocaleString(BASE_LOCALE);

export function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

export function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, '');
}

export const getPERCENT_WITH_TEXT = (num = 0) => `${num}%`;
