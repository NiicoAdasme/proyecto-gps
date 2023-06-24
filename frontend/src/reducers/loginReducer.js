import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: true,
  userData: null,
};

const loginReducer = createSlice({
  name:"login",
  initialState,
  reducers: {
    loginUser : (state,action) => {
      const {success , respuesta} = action.payload;
      state.isLogged = success;
      state.userData = respuesta;
    },
    changeLogin : (state,action) => {
      state.isLogged = action.payload;
    }
  }
})

export const {loginUser,changeLogin} = loginReducer.actions;
export default loginReducer.reducer;
