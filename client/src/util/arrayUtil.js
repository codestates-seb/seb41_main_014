export const getARRAY_CHANGE_VALUE = (array, idx, value) => {
  const head = array.slice(0, idx);
  const tail = array.slice(idx + 1);
  return [...head, value, ...tail];
};

export const getARRAY_DELETE_VALUE = (array, idx) => {
  const head = array.slice(0, idx);
  const tail = array.slice(idx + 1);
  return [...head, ...tail];
};
