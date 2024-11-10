import API from "@/config/apiClient";

export const logoutRequest = async () => {
  try {
    const response = await API.get("/auth/logout");
    return response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw new Error("An unexpected error occurred.");
  }
};
