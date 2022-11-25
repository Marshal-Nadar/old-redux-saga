const petIncrement = number => {
  console.log(number);
  return {
    type: 'PET_INCREASED',
    payload: number,
  };
};
const petDecrement = number => {
  return {
    type: 'PET_DECREASED',
    payload: number,
  };
};

export { petIncrement, petDecrement };
