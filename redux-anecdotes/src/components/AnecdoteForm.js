import React, { useState } from "react";
import { connect } from "react-redux";
// import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const [anecdote, setAnecdote] = useState("");
  // const dispatch = useDispatch();

  return (
    <div>
      <h2>create new</h2>
      <form>
        <div>
          <input
            onChange={(e) => {
              setAnecdote(e.target.value);
            }}
            value={anecdote}
          />
        </div>
        <button
          onClick={async (e) => {
            e.preventDefault();

            props.createAnecdote(anecdote);
            setAnecdote("");
            props.setNotification(`You created '${anecdote}'`, 5);
            // dispatch(createAnecdote(anecdote));
            // dispatch(setNotification(`You created '${anecdote}'`, 5));
          }}
        >
          create
        </button>
      </form>
    </div>
  );
};

const ConnectedAnecdoteForm = connect(null, {
  createAnecdote,
  setNotification,
})(AnecdoteForm);
export default ConnectedAnecdoteForm;
