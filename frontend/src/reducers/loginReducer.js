const initialState = {
    isLogged: false,
    userData: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLogged: true,
          userData: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLogged: false,
          userData: null,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
  