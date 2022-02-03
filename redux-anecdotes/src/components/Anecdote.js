import React from "react";
import { useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import {
  notificationChange,
  removeNotification,
} from "../reducers/notificationReducer";

const Anecdote = ({ anecdote }) => {
  const style = {
    marginBottom: "1rem",
    borderBottom: "1px solid black",
    paddingBottom: ".5rem",
  };
  const styleButton = {
    marginTop: 5,
    marginLeft: 5,
  };
  const dispatch = useDispatch();
  const vote = (id) => {
    dispatch(addVote(id));
    dispatch(notificationChange(`You voted '${anecdote.content}'`));

    setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
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
