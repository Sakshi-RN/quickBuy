import { all, fork } from "redux-saga/effects";
import {
  watchAddProductToCartSaga,
  watchApplyAddressToCartSaga,
  watchApplyCouponToCartSaga,
  watchRemoveItemFromCartSaga,
  watchUpdateItemToCartSaga,
} from "./saga/CartSaga";

export function* rootSaga() {
  yield all([
    fork(watchAddProductToCartSaga),
    fork(watchRemoveItemFromCartSaga),
    fork(watchUpdateItemToCartSaga),
    fork(watchApplyAddressToCartSaga),
    fork(watchApplyCouponToCartSaga),
  ]);
}
