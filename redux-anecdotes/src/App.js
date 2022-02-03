import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { getAllAnecdotes } from "./reducers/anecdoteReducer";
import { getAll } from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    getAll().then((anecdotes) => {
      dispatch(getAllAnecdotes(anecdotes));
    });
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
