import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IsMolalOpen {
  open: boolean;
}

const initialState: IsMolalOpen = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOpen } = modalSlice.actions;

export default modalSlice.reducer;
