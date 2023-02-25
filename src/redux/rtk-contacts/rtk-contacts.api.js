import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const contactsApi = createApi({
  reducerPath: 'rtk-contacts',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({baseUrl:'https://63f793b8e8a73b486afb43d3.mockapi.io'}),
  providesTags: ({ data }) => {
    return data
      ? [
          ...data.map(({ id }) => ({ type: 'Post', id })),
          { type: 'Post', id: 'LIST' },
        ]
      : [{ type: 'Post', id: 'LIST' }];
  },
  invalidatesTags: ['Post'],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => '/contacts',
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
  }),
});

export const {
  useGetContactsQuery,
  useDeleteContactsMutation,
  useAddUserMutation,
} = contactsApi;
