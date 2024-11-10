import API from "@/config/apiClient";
import { resetPassordProps } from "@/types";

export const resetPasswordRequest = async (data: resetPassordProps) => {
    await API.post("/auth/password/reset", data);      
};
