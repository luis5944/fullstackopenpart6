import { createNew, getAll, update } from "../services/anecdotes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_NEW":
      return [...state, action.payload];
    case "ADD_VOTE":
      return state.map((anec) => {
        if (anec.id === action.payload) {
          console.log(anec.votes);
        }
        return anec.id === action.payload
          ? { ...anec, votes: Number(anec.votes) + 1 }
          : anec;
      });
    case "GET_ALL":
      return action.payload;
    default:
      return state;
  }
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createNew(content);
    dispatch({ type: "CREATE_NEW", payload: newAnecdote });
  };
};
export const getAllAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await getAll();
    dispatch({ type: "GET_ALL", payload: anecdotes });
  };
};
export const addVote = (anecdote) => {
  return async (dispatch) => {
    const updateAnec = await update(anecdote);
    dispatch({ type: "ADD_VOTE", payload: updateAnec.id });
  };
};
export default reducer;
