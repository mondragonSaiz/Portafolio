export const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTION':
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    default:
      return state;
  }
};
