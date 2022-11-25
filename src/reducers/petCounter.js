const petCounter = (state = 10, action) => {
  // console.log();
  switch (action.type) {
    case 'PET_INCREASED':
      console.log('first');
      return state + action.payload;

    case 'PET_DECREASED':
      console.log('firstdfd');
      return state - action.payload;

    default:
      return state;
  }
};

export default petCounter;
