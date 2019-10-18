export const doneFilter = index => dispatch => {
    return dispatch({
      type: "DONE_FILTER"
    });
  };
  
  export const todoFilter = index => dispatch => {
    return dispatch({
      type: "TODO_FILTER"
    });
  };
  
  export const cleanFilter = index => dispatch => {
    return dispatch({
      type: "CLEAN_FILTER"
    });
  };