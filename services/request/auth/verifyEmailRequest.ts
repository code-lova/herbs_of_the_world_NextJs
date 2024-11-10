import API from "@/config/apiClient";


export const verifyEmailRequest = async (verificationCode: string | string[]) => {
    try {
      const response = await API.get(`/auth/email/verify/${verificationCode}`);
      return response;
    } catch (error) {
        throw error;
    }
  };