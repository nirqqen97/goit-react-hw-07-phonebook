// import { createSelector } from "@reduxjs/toolkit";

// export const selectContacts = state => state.contacts.contacts

export const selectFilters = state =>  state.contacts.search

// export const selectStatus = state => state.contacts.status

// export const selectFilteredContacts1 = (state) => {   
//     const contacts = selectContacts(state) || [];
//     const filters = selectFilters(state) || '';
//     return contacts.filter(contact => contact.name.toLowerCase().trim().includes(filters.toLowerCase().trim()));
//   };

//   export const selectFilteredContacts = createSelector(
//     [selectContacts, selectFilters],
//     (contacts, filters) => {
//       contacts = contacts || [];
//       filters = filters || '';
//       return contacts.filter(contact =>
//         contact.name.toLowerCase().trim().includes(filters.toLowerCase().trim())
//       );
//     }
//   );
  