import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../tagTypes/tagTypes";
import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
import getBaseUrl from "@/helpers/config/envConfig";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: getBaseUrl() as string,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});
export default baseApi;
