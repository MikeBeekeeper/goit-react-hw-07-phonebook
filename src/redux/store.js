import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { myContactsSlice, myFilterSlice } from '../redux/slice';

const rootReducer = combineReducers({
    contacts: myContactsSlice.reducer,
    filter: myFilterSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer
})
