import API from "@/config/apiClient";
import { User } from "@/types";

export const getAuthUserRequest = async (): Promise<User | null > => {
    try {
      return await API.get("/user") as User;
    } catch (error) {
      throw error;
    }
  };
  