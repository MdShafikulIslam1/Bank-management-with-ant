import { tagTypes } from "../tagTypes/tagTypes";
import baseApi from "./baseApi";

const withdrawApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addWithdraw: build.mutation({
      query: (data: any) => ({
        url: "/withdraw/add-withdraw",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.WITHDRAW],
    }),
    allDWithdraw: build.query({
      query: (params: any) => ({
        url: "/withdraw",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.WITHDRAW],
    }),
    // changePassword: build.mutation({
    //   query: (data) => ({
    //     url: "/auth/change-password",
    //     method: "POST",
    //     data: data,
    //   }),
    // }),
    // forgotPassword: build.mutation({
    //   query: (data) => ({
    //     url: "/auth/forgot-password",
    //     method: "POST",
    //     data: data,
    //   }),
    // }),
    // resetPassword: build.mutation({
    //   query: (data) => ({
    //     url: "/auth/reset-password",
    //     method: "POST",
    //     data: data,
    //   }),
    // }),
  }),
});

export const { useAddWithdrawMutation, useAllDWithdrawQuery } = withdrawApi;
