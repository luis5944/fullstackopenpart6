const initialState = "";

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NOTIFICATION":
      return action.notification;
    case "EMPTY":
      return initialState;
    default:
      return state;
  }
};

export const setNotification = (notification, seconds) => {
  return (dispatch) => {
    dispatch({ type: "SET_NOTIFICATION", notification });

    setTimeout(function () {
      dispatch(removeNotification());
    }, seconds * 1000);
  };
};

export const removeNotification = () => {
  return {
    type: "EMPTY",
    notification: "",
  };
};

export default notificationReducer;
