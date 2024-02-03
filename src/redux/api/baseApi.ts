import { getBaseUrl } from "@/helpers/config/envConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tagTypes/tagTypes";
import { axiosBaseQuery } from "@/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://bank-management-backend.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
export default baseApi;
