import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducers/loginReducer';
import { uiReducer } from './reducers/uiReducer';
import { calendarReducer } from './reducers/calendarReducer';

const store = configureStore({
  reducer: {
    login: loginReducer,
    ui: uiReducer,
    calendar: calendarReducer
  },
});

export default store;
