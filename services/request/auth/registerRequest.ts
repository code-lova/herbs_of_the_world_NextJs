import API from "@/config/apiClient";
import { RegisterData } from "@/types";


export const registerRequest = async (data: RegisterData) => {
  try {
    const response = await API.post("/auth/register", data);
    return response;
  } catch (error) {
    throw error;
  }
};
