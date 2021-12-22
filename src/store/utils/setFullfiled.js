export const setFullfilled = (state, action) => {
  state.status = 'resolved';
  if (action.payload) {
    state.todos = action.payload;
  }
};
