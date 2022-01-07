const themeReducer = (state = { theme: 'light' }, action) => {
  switch (action.type) {
    case 'DARK':
      return { theme: 'dark-theme' };
    case 'LIGHT':
      return { theme: 'light-theme' };
    default:
      return state;
  }
};

export default themeReducer;
