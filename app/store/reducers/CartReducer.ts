import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartRDXInterface } from "../../types/reducers";

const initialState: CartRDXInterface = {
  products: [],
  addressId: "",
  couponId: "",
  netPayable: 0,
};

export const CartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAddress: (state, { payload }) => {
      state.addressId = payload.addressId;
    },
    setNetAmount: (state, { payload }) => {
      state.netPayable = payload;
    },
    setCoupon: (state, { payload }) => {
      state.couponId = payload.couponId;
    },
    addToCart: (state, { payload }) => {
      const productsExists = state.products.find(
        (item) => item.product._id === payload.product.id
      );
      if (!productsExists) {
        const cartItem: CartItem = {
          product: payload.product,
          items: payload.items,
          isSubscription: payload.isSubscriptionAvail,
        };
        state.products.push(cartItem);
      }
    },
    removeFromCart: (state, { payload }) => {
      state.products = state.products.filter(
        (item) => item.product._id !== payload.productId
      );
    },
    updateItem: (state, { payload }) => {
      const product = state.products.find(
        (item) => item.product._id === payload.productId
      );
      if (product) {
        product.items = payload.newItems;
      }
    },
    updateToSubscription: (state, { payload }) => {
      const product = state.products.find(
        (item) => item.product._id === payload.productId
      );
      if (product) {
        product.isSubscription = true;
      }
    },
    setSubscriptionTimeline: (state, { payload }) => {
      // Find the index of the product that matches the productId from the payload
      const productIndex = state.products.findIndex(
        (item) => item.product._id === payload.productId
      );
      // Check if the product was found
      if (productIndex !== -1) {
        // Create a new array for the products to avoid mutation
        const updatedProducts = state.products.map((item, index) => {
          // If this is the product we want to update, return a new object with the updated subscriptionTimeline
          if (index === productIndex) {
            return {
              ...item,
              subscriptionTimeline: payload.subscriptionTimeline,
            };
          }
          // Otherwise, return the item unchanged
          return item;
        });
        // Update the state with the new array of products
        state.products = updatedProducts;
      }
    },
    updateSubscriptionTimelineProduct: (state, { payload }) => {
      const { newProduct, subscriptionDate, productId } = payload;
      const productIndex = state.products.findIndex(
        (item) => item.product._id === productId
      );
      if (productIndex !== -1) {
        // console.log("point 1");
        const product = state.products[productIndex];
        if (product?.subscriptionTimeline) {
          // console.log("point 2");
          const timelineItemIndex = product.subscriptionTimeline.findIndex(
            (item) => item.date === subscriptionDate
          );
          if (timelineItemIndex !== -1) {
            // console.log("point 3");
            // Create a new array for the subscriptionTimeline to avoid mutation
            const updatedSubscriptionTimeline =
              product.subscriptionTimeline.map((item, index) => {
                if (index === timelineItemIndex) {
                  // Return a new object with the updated product
                  return { ...item, product: newProduct };
                }
                return item;
              });
            // Update the product's subscriptionTimeline with the new array
            state.products[productIndex] = {
              ...product,
              subscriptionTimeline: updatedSubscriptionTimeline,
            };
          }
        }
      }
    },
    updateSubscriptionTimelineItems: (state, { payload }) => {
      const { productId, subscriptionDate, newItems } = payload;

      // Use findIndex to locate the product and the timeline item in one pass
      const productIndex = state.products.findIndex(
        (item) =>
          item.product._id === productId &&
          item.subscriptionTimeline?.some(
            (timelineItem) => timelineItem.date === subscriptionDate
          )
      );
      console.log(productIndex, productId);
      // If the product and timeline item were found, update them
      if (productIndex !== -1) {
        console.log("Point 1");
        // Ensure state.products[productIndex] is defined before accessing subscriptionTimeline
        const product = state.products[productIndex];
        const updatedSubscriptionTimeline = (
          product?.subscriptionTimeline ?? []
        ).map((item) =>
          item.date === subscriptionDate ? { ...item, items: newItems } : item
        );

        state.products[productIndex] = {
          ...product!, // Use the non-null assertion operator here
          subscriptionTimeline: updatedSubscriptionTimeline,
        };
      }
    },

    emptyCart: (state) => {
      state.couponId = "";
      state.netPayable = 0;
      state.products = [];
    },
  },
});

export const {
  addToCart,
  setAddress,
  removeFromCart,
  updateItem,
  updateToSubscription,
  updateSubscriptionTimelineItems,
  updateSubscriptionTimelineProduct,
  setSubscriptionTimeline,
  setCoupon,
  emptyCart,
  setNetAmount,
} = CartReducer.actions;
