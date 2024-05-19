import api from "./AxiosConfig";

export const AxiosGetAllAddressesAsync = async () => {
  try {
    const response = await api.get("/api/v1/address");
    console.log("API /api/v1/address ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosGetAddressesByIdAsync = async (addressId: string) => {
  try {
    const response = await api.get(`/api/v1/address/${addressId}`);
    console.log("API /api/v1/address/ ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export interface AddressDataInterface {
  areaName: string;
  blockName: string;
  city: string;
  colonyName: string;
  communityName: string;
  flatPlot: string;
  pincode: string;
  state: string;
}

export const AxiosCreateAddressAsync = async (body: AddressDataInterface) => {
  try {
    const response = await api.post("/api/v1/address", body);
    console.log("API /api/v1/address/getAddresss ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosUpdateAddressAsync = async (
  addressId: string,
  updatedData: AddressDataInterface
) => {
  try {
    const response = await api.put(`/api/v1/address/${addressId}`, updatedData);
    console.log("API /api/v1/address/update ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};

export const AxiosDeleteAddressAsync = async (addressId: string) => {
  try {
    const response = await api.delete(`/api/v1/address/${addressId}`);
    console.log("API /api/v1/address/delete ✅ ", response.data);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return error.response
      ? error.response.data
      : { message: "An error occurred", status: -1 };
  }
};
