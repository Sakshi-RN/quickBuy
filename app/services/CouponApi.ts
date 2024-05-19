import api from "./AxiosConfig";

export const AxiosGetAllCouponAsync = async () => {
  try {
    const response = await api.get("api/v1/coupon/");
    console.log("API api/v1/coupon/ ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosApplyCouponToCartAsync = async (couponId: string) => {
  try {
    const response = await api.post("/api/v1/cart/coupon", { couponId });
    console.log("API /api/v1/cart/coupon ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
