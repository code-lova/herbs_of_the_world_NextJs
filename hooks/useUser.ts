import { useQuery } from "@tanstack/react-query";
import { getAuthUserRequest } from "@/services/request/user/getAuthUserRequest";
import { User } from "@/types";

export const AUTH = "auth" as const;

const useUser = (opts = {}) => {
  const {
    data: user = null,
    refetch,
    isLoading,
    ...rest
  } = useQuery<User | null>({
    queryKey: [AUTH],
    queryFn: async () => {
      try {
        return await getAuthUserRequest();
      } catch {
        return null;
      }
    },
    refetchOnWindowFocus: true, // Refresh user data on focus
    staleTime: 5 * 60 * 1000, // Five minutes to avoid too frequent refetching
    ...opts,
  });
  return { user, refetch, isLoading, ...rest };
};

export default useUser;