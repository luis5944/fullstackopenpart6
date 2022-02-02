import React from "react";
import { useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  const styleButton = {
    marginTop: 5,
    marginLeft: 5,
  };
  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(addVote(id));
  };
  return (
    <div style={style}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button style={styleButton} onClick={() => vote(anecdote.id)}>
          vote
        </button>
      </div>
    </div>
  );
};

export default Anecdote;
