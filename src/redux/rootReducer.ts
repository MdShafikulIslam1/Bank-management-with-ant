import baseApi from "./api/baseApi";
import modalReducer from "@/redux/feature/modal/modalSlice";

const reducer = {
  modal: modalReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
export default reducer;
