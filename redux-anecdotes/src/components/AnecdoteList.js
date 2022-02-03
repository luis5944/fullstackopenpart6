import React from "react";
import { useSelector } from "react-redux";
import Anecdote from "./Anecdote";

const AnecdoteList = () => {
  const filter = useSelector((state) => state.filter);
  const anecdotes = useSelector((state) => state.anecdotes)
    .sort((a, b) => b.votes - a.votes)
    .filter((a) => a.content.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <Anecdote anecdote={anecdote} key={anecdote.id} />
      ))}
    </div>
  );
};

export default AnecdoteList;
