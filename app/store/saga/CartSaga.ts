import { call, put, takeEvery } from "redux-saga/effects";

import {
  ApiAddProductToCart,
  ApiApplyAddressToCart,
  ApiApplyCouponToCart,
  ApiRemoveToCart,
  ApiUpdateItemQuantityInCart,
} from "../../services/CartApi";

import {
  addToCart,
  removeFromCart,
  setAddress,
  setCoupon,
  updateItem,
} from "../reducers/CartReducer";

function* SagaAddProductToCart(action: any): any {
  try {
    const response: any = yield call(
      ApiAddProductToCart,
      action.payload.product._id
    );
    console.log(response, "<-- Add Item To Cart Saga ✅ ");
  } catch (error: any) {
    yield put({ type: "ADD_CART_FAILED", message: error.message });
  }
}

export function* watchAddProductToCartSaga() {
  yield takeEvery(addToCart.type, SagaAddProductToCart);
}

function* SagaUpdateItemToCart(action: any): any {
  try {
    const response: any = yield call(
      ApiUpdateItemQuantityInCart,
      action.payload.productId,
      action.payload.newItems
    );
    console.log(response, "<-- Update Item To Cart Saga ✅ ");
  } catch (error: any) {
    yield put({ type: "UPDATE_CART_FAILED", message: error.message });
  }
}

export function* watchUpdateItemToCartSaga() {
  yield takeEvery(updateItem.type, SagaUpdateItemToCart);
}

function* SagaRemoveItemFromCart(action: any): any {
  try {
    const response: any = yield call(ApiRemoveToCart, action.payload.productId);
    console.log(response, "<-- Update Item To Cart Saga ✅ ");
  } catch (error: any) {
    yield put({ type: "UPDATE_CART_FAILED", message: error.message });
  }
}

export function* watchRemoveItemFromCartSaga() {
  yield takeEvery(removeFromCart.type, SagaRemoveItemFromCart);
}

function* SagaApplyAddressToCart(action: any): any {
  try {
    const response: any = yield call(
      ApiApplyAddressToCart,
      action.payload.addressId
    );
    console.log(response, "<-- Update Item To Cart Saga ✅ ");
  } catch (error: any) {
    yield put({ type: "UPDATE_CART_FAILED", message: error.message });
  }
}

export function* watchApplyAddressToCartSaga() {
  yield takeEvery(setAddress.type, SagaApplyAddressToCart);
}

function* SagaApplyCouponToCart(action: any): any {
  try {
    const response: any = yield call(
      ApiApplyCouponToCart,
      action.payload.couponId
    );
    console.log(response, "<-- Update Item To Cart Saga ✅ ");
  } catch (error: any) {
    yield put({ type: "UPDATE_CART_FAILED", message: error.message });
  }
}

export function* watchApplyCouponToCartSaga() {
  yield takeEvery(setCoupon.type, SagaApplyCouponToCart);
}
