import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  //   middleware: getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  // devTools: false,
});
