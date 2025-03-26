import { combineReducers, configureStore, legacy_createStore } from '@reduxjs/toolkit';
import userReducer from './loginReducer';

export userReducer = combineReducers({
    auth: userReducer,
})
export const store=legacy_createStore(userReducer)
