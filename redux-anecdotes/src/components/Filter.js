import React from "react";
import { connect } from "react-redux";
//import { useDispatch } from "react-redux";
import { setFilter } from "../reducers/filterReducer";

const Filter = (props) => {
  //  const dispatch = useDispatch();
  const handleChange = (event) => {
    props.setFilter(event.target.value);
    // dispatch(setFilter(event.target.value));
  };
  const style = {
    marginTop: 10,
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

const ConnectedFilter = connect(null, { setFilter })(Filter);
export default ConnectedFilter;
