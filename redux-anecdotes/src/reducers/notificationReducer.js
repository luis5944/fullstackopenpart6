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

export const notificationChange = (notification) => {
  return {
    type: "SET_NOTIFICATION",
    notification,
  };
};

export const removeNotification = () => {
  return {
    type: "EMPTY",
    notification: "",
  };
};

export default notificationReducer;
