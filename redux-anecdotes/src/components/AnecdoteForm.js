import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = () => {
  const [anecdote, setAnecdote] = useState("");
  const dispatch = useDispatch();
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
          onClick={(e) => {
            e.preventDefault();
            dispatch(createAnecdote(anecdote));
          }}
        >
          create
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
