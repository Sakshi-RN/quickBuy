import api from "./AxiosConfig";

export const ApiGetUserProfileAsync = async () => {
  try {
    const response = await api.get(`/api/v1/auth/profile`);
    console.log("API /api/v1/user/profile/:userId ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const ApiUpdateUserProfileAsync = async (updateData: any) => {
  try {
    const response = await api.patch(`/api/v1/auth/profile`, updateData);
    console.log("API /api/v1/user/profile/:userId ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
