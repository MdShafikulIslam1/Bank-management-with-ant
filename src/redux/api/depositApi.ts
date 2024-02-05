import { tagTypes } from "../tagTypes/tagTypes";
import baseApi from "./baseApi";

const depositApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDeposit: build.mutation({
      query: (data: any) => ({
        url: "/deposit/add-deposit",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.DEPOSIT],
    }),
    allDeposit: build.query({
      query: (params: any) => ({
        url: "/deposit",
        method: "GET",
        params,
      }),
      providesTags: [tagTypes.DEPOSIT],
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

export const { useAddDepositMutation, useAllDepositQuery } = depositApi;
