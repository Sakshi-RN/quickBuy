import api from "./AxiosConfig";

export const AxiosRegisterUserAsync = async (
  phonenumber: string,
  fullname: string
) => {
  try {
    const body = {
      phoneNumber: phonenumber,
      userName: fullname,
      device: "web",
    };
    const response = await api.post("/api/v1/auth/register", body);
    console.log("API /api/v1/auth/register ✅  ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

export const AxiosLoginUserAsync = async (phonenumber: string) => {
  try {
    const body = {
      phoneNumber: phonenumber,
    };
    const response = await api.post("/api/v1/auth/login", body);
    console.log("API /api/v1/auth/register ✅  ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};

export const AxiosVerifyUserOTPAsync = async (
  phonenumber: string,
  otp: string
) => {
  try {
    const body = {
      phoneNumber: phonenumber,
      otp: otp,
    };
    const response = await api.post("/api/v1/auth/verify-otp", body);
    console.log("API /api/v1/auth/register ✅  ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
};
