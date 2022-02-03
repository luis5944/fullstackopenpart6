const getId = () => (100000 * Math.random()).toFixed(0);

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW":
      return [...state, action.payload];
    case "ADD_VOTE":
      return state.map((anec) =>
        anec.id === action.payload ? { ...anec, votes: anec.votes + 1 } : anec
      );
    case "GET_ALL":
      return action.payload;
    default:
      return state;
  }
};

export const createAnecdote = (content) => {
  return {
    type: "CREATE_NEW",
    payload: content,
  };
};
export const getAllAnecdotes = (anecdotes) => {
  return {
    type: "GET_ALL",
    payload: anecdotes,
  };
};
export const addVote = (id) => {
  return {
    type: "ADD_VOTE",
    payload: id,
  };
};
export default reducer;
