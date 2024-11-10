import API from "@/config/apiClient";

export const sendPasswordResetRequest = async (email: string) => {
    try {
      const response = await API.post("/auth/password/forgot", {email});
      return response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error("An unexpected error occurred.");
    }
  };
