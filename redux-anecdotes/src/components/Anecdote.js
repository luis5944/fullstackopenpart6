import React from "react";
import { useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const dispatch = useDispatch();
  const style = {
    marginBottom: "1rem",
    borderBottom: "1px solid black",
    paddingBottom: ".5rem",
  };
  const styleButton = {
    marginTop: 5,
    marginLeft: 5,
  };

  const vote = (anecdote) => {
    dispatch(addVote(anecdote));
    dispatch(setNotification(`You voted '${anecdote.content}'`, 5));
  };
  return (
    <div style={style}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button style={styleButton} onClick={() => vote(anecdote)}>
          vote
        </button>
      </div>
    </div>
  );
};

export default Anecdote;
