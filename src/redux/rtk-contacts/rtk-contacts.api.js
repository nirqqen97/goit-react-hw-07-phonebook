import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactsApi = createApi({
  reducerPath: 'rtk-contacts',
  tagTypes: ['Contacts'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63f793b8e8a73b486afb43d3.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ({ data }) => {
        return data
          ? [
              ...data.map(({ id }) => ({ type: 'Contacts', id })),
              { type: 'Contacts', id: 'LIST' },
            ]
          : [{ type: 'Contacts', id: 'LIST' }];
      },
    }),
    deleteContacts: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addUser: builder.mutation({
      query: newUser => ({
        url: 'contacts',
        method: 'POST',
        body: newUser,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddUserMutation,
} = contactsApi;
