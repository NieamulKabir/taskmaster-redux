import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Nieamul Kabir",
  email: "nieamul@gmail.com",
 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
