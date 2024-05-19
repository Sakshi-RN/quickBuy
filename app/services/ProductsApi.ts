import api from "./AxiosConfig";

export const AxiosGetAllProductsAsync = async () => {
  try {
    const response = await api.get("/api/v1/product/");
    console.log("API /api/v1/product/getall ✅ ", response.data.message);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosGetPopularProductsAsync = async () => {
  try {
    const response = await api.get("/api/v1/product/popular");
    console.log("API /api/v1/product/getall ✅ ", response.data.message);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosGetAllProductByCategoryAsync = async (categoryId: string) => {
  try {
    const response = await api.get(`api/v1/product/category/${categoryId}`);
    console.log(
      "API api/v1/product/category/6616889bdd231e9c5524c0ce ✅ ",
      response.data.message
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosGetProductByIdAsync = async (productId: string) => {
  try {
    const response = await api.get(`/api/v1/product/${productId}`);
    console.log(`API /api/v1/product/${productId} ✅ `, response.data.message);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosSearchProductByNameAsync = async (query: string) => {
  try {
    const response = await api.get(`api/v1/product/search?name=${query}`);
    console.log(
      `API api/v1/product/search?name={query} ✅ `,
      response.data.message
    );
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
