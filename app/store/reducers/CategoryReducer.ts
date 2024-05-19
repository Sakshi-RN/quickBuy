import { createSlice } from "@reduxjs/toolkit";
import { CategoryRDXInterface } from "../../types/reducers";

const initialState: CategoryRDXInterface = {
  activeCategoryId: "",
  name: "",
};

export const CategoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.activeCategoryId = action.payload.id;
      state.name = action.payload.name;
    },
  },
});

export const { setCategoryId } = CategoryReducer.actions;

export default CategoryReducer.reducer;
