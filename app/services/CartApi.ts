import api from "./AxiosConfig";

export const ApiAddProductToCart = async (productID: string) => {
  try {
    const body = {
      product: productID,
      items: 1,
      isSubscription: false,
    };
    const response = await api.post(`/api/v1/cart/product`, body);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiUpdateItemQuantityInCart = async (
  productID: string,
  items: number
) => {
  try {
    const body = {
      productId: productID,
      items: items,
    };
    const response = await api.patch(`/api/v1/cart/product`, body);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiGetCart = async () => {
  try {
    const response = await api.get(`/api/v1/cart`);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiApplyAddressToCart = async (addressID: string) => {
  try {
    const body = {
      addressId: addressID,
    };
    const response = await api.post(`/api/v1/cart/address`, body);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiApplyCouponToCart = async (couponID: string) => {
  try {
    const body = {
      couponId: couponID,
    };
    const response = await api.post(`/api/v1/cart/coupon`, body);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiRemoveToCart = async (productId: string) => {
  try {
    const response = await api.delete(`/api/v1/cart/product/${productId}`);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiGetBillingFromCart = async () => {
  try {
    const response = await api.get(`/api/v1/cart/billing`);
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiFetchPpaymentForCart = async () => {
  try {
    const response = await api.get(`/api/v1/payment/cart`);
    console.log("API /api/v1/payment/cart ✅", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiPlaceOrderFromCart = async () => {
  try {
    const response = await api.get(`/api/v1/cart/order`);
    console.log("API /api/v1/cart/order ✅", response.data);
    return response.data;
  } catch (error: any) {
    console.log("Cart get API Error", error.response.data);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
