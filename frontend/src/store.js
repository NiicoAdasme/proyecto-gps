import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';

const store = configureStore({
  reducer: {
    auth: loginReducer,
  },
});

export default store;
