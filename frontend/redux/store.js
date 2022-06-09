import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import reduxStore from "./reducers/reducers";
import { userStore } from "./reducers/users";

const reducers = combineReducers({
  reduxStore: reduxStore,
  userStore: userStore
});

// redux-persist config
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
  blacklist: []
};

// Combine redux-toolkit reducers with redux-persist config
const persistedReducer = persistReducer(persistConfig, reducers);

// Create the Redux store
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat()
});
