import PersistReducer from './PersistReducer'
import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    storage: AsyncStorage,
    key: "persistedReducer",
    version: 1,
};

export default combineReducers({
    persistedReducer: persistReducer(persistConfig, PersistReducer)
})