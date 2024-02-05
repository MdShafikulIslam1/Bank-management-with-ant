import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllUser: build.query({
      query: (arg: any) => ({
        url: "/users",
        method: "GET",
        params: arg,
      }),
    }),
    getUserById: build.query({
      query: (id: any) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllUserQuery, useGetUserByIdQuery } = userApi;
