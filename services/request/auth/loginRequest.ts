import API from "@/config/apiClient";
import { loginProps } from "@/types";

export const loginRequest = async (data: loginProps) => {
   try{
     const response = await API.post("/auth/login", data); 
     return response;
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   } catch (error) {
    throw new Error("An unexpected error occurred.");
   }
};