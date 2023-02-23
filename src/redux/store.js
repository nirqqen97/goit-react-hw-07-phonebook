// import { userReducer } from './users/users.reducer';
import { persistStore,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {configureStore} from "@reduxjs/toolkit";
import {initUsersState} from "./users/users.init-state";
import {userReducer} from "./users/users.slice";
import { contactsReducer } from './Contacts/Contacts.slice';
import { contactsInitState } from './Contacts/Contacts.init-state.slice';

const initState = {
    users:initUsersState,
    contacts : contactsInitState
}

// const rootReducer = combineReducers({
//     users: userReducer,
//     contacts: contactsReducer
// })


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist : ["data"]
//   }
   
// const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: {
      users: userReducer,
      contacts: contactsReducer
       },
    devTools: true,
    preloadedState: initState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),});

export const persistor = persistStore(store)
