import { createSlice } from '@reduxjs/toolkit';
import { contactsInitState } from './Contacts.init-state.slice';
import { getContactsThunk } from './Contacts.thunk';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
     usersSearchAction: (state,{payload}) => {
          
          state.search = payload
          
      },
  },
  extraReducers: {
     [getContactsThunk.pending]: state =>{
          state.status = "loading"
     },
     [getContactsThunk.fulfilled]: (state, {payload}) =>{
          state.status = 'success';
          state.contacts = payload;
     },
     [getContactsThunk.error]: state =>{
         state.status = 'error'
     }
  }
});

export const {usersSearchAction} = contactsSlice.actions;


export const contactsReducer = contactsSlice.reducer;

