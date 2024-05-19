import api from "./AxiosConfig";

export const AxiosGetAllCategoryAsync = async () => {
  try {
    const response = await api.get("/api/v1/category/");
    console.log("API /api/v1/category/ ✅ ", response.data.message);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
