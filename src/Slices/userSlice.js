import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {
      access: "",
      username: "",

      isAuth: false,
    };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.access = action.payload.user.accessToken;

      state.username = action.payload.user.fullname;

      state.isAuth = action.payload.isAuth;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },

    logoutSuccess: (state, action) => {
      state.access = null;

      state.username = null;

      state.isAuth = false;
      localStorage.removeItem("user");
    },
  },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;
