export const addTask = task => dispatch => {
    return dispatch({
      type: "ADD_TASK",
      value: task
    });
  };
  
  export const removeTask = index => dispatch => {
    return dispatch({
      type: "REMOVE_TASK",
      value: index
    });
  };
  