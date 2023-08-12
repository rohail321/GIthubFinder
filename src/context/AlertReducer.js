const githubReducer = (state, action) => {
  switch (action.type) {
    case "REMOVE_ALERT":
      return null;
    case "SET_ALERT":
      return action.payload;
    default:
      return state;
  }
};

export default githubReducer;
