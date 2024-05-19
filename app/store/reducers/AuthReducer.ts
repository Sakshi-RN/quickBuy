import { createSlice } from "@reduxjs/toolkit";
import { AuthRDXInterface } from "../../types/reducers";

const initialState: AuthRDXInterface = {
  isLoggedIn: false,
  authToken: "",
  phoneNumber: "",
};

export const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload.loggedIn;
      state.authToken = action.payload.token;
    },
    setAuthToken: (state, action) => {
      state.authToken = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setIsLoggedIn, setPhoneNumber } = AuthReducer.actions;

export default AuthReducer.reducer;
