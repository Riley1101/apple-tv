import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  open: boolean;
}

const initialState: MenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "Menu",
  initialState,
  reducers: {
    toggle: (state: MenuState) => {
      state.open = !state.open;
    },
  },
});

export const { toggle } = menuSlice.actions;

export default menuSlice.reducer;
