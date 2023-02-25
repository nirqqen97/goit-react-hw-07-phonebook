import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'rtk-contacts',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({baseUrl:'https://63f793b8e8a73b486afb43d3.mockapi.io'}),
    providesTags: ({data}) =>
    data?
        [
          ...data.map(({ id }) => ({ type: 'Contacts', id })),
          { type: 'Contacts', id: 'LIST' },
        ]
      : 
        [{ type: 'Contacts', id: 'LIST' }],
    endpoints: (builder) =>({
        getContacts : builder.query({
            query: () =>'/contacts'
        }),
        deleteContacts: builder.mutation({
            query: (id) => ({
              url: `contacts/${id}`,
              method: 'DELETE',
            }),
          }),
      
          addUser: builder.mutation({
            query: (newUser) => ({
              url: '/contacts',
              method: 'POST',
              body: newUser,
            }),
          }),
      
          invalidatesTags: (result, error, id) => [{ type: 'Contacts', id }],
        }),
      })

export const {useGetContactsQuery,useDeleteContactsMutation, useAddUserMutation} = contactsApi   