const initialState = {
    count: 10,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 5 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count:initialState.count };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  