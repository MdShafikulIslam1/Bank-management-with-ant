import baseApi from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAccount: build.mutation({
      query: (user: any) => ({
        url: "/auth/create-account",
        method: "POST",
        data: user,
      }),
    }),
    login: build.mutation({
      query: (user: any) => ({
        url: "/auth/login",
        method: "POST",
        data: user,
      }),
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data,
      }),
    }),
  }),
});

export const {
  useCreateAccountMutation,
  useLoginMutation,
  useChangePasswordMutation,
} = authApi;
