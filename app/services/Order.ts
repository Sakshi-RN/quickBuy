import api from "./AxiosConfig";

export const ApiGetOrdersAsync = async () => {
  try {
    const response = await api.get("/api/v1/order");
    console.log("API /api/v1/order ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApigetOrderByIdAsync = async (orderID: string) => {
  try {
    console.log("Order ID", orderID);
    const response = await api.get(`/api/v1/order/${orderID}`);
    console.log("API /api/v1/order/id ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
