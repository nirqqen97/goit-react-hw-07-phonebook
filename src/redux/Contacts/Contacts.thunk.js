import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getContactsThunk = createAsyncThunk('contacts', async () =>{
    const response = await axios.get('https://63f793b8e8a73b486afb43d3.mockapi.io/contacts');
    return response
})