import { createSlice } from "@reduxjs/toolkit";
import { OrderRDXInterface } from "../../types/reducers";

const initialState: OrderRDXInterface = {
  orderID: "",
  order_Id: "",
  orderPlaced: "",
};

export const OrderReducer = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrderMeta: (state, { payload }) => {
      state.orderID = payload.orderID;
      state.order_Id = payload.order_Id;
      state.orderPlaced = payload.orderPlaced;
    },
  },
});

export const { setOrderMeta } = OrderReducer.actions;

export default OrderReducer.reducer;
