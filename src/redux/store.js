import { configureStore } from "@reduxjs/toolkit";
import {FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import { contactsReducer } from './Contacts/Contacts.slice';
import { contactsInitState } from './Contacts/Contacts.init-state.slice';
import { contactsApi } from "./rtk-contacts/rtk-contacts.api";

const initState = {
    contacts: contactsInitState
}

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        [contactsApi.reducerPath]: contactsApi.reducer
    },
    devTools: true,
    preloadedState: initState,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([contactsApi.middleware]),
});


