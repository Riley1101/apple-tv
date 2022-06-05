import { configureStore } from "@reduxjs/toolkit";
import menuSlices from "@/state/slices/menuSlices";
export const store = configureStore({
  reducer: {
    menu: menuSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
