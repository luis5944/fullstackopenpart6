import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import {
  notificationChange,
  removeNotification,
} from "../reducers/notificationReducer";
import { createNew } from "../services/anecdotes";

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
          onClick={async (e) => {
            e.preventDefault();
            const newAnecdote = await createNew(anecdote);

            dispatch(createAnecdote(newAnecdote));
            dispatch(notificationChange(`You created '${anecdote}'`));

            setTimeout(() => {
              dispatch(removeNotification());
            }, 5000);
          }}
        >
          create
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
