import { useQuery } from "@tanstack/react-query";
import { getAuthUserRequest } from "@/services/request/user/getAuthUserRequest";
import { User } from "@/types";

export const AUTH = "auth";

const useUser = (opts = {}) => {
  const {
    data: user = null,
    refetch,
    isLoading,
    ...rest
  } = useQuery<User | null>({
    queryKey: [AUTH],
    queryFn: getAuthUserRequest,
    refetchOnWindowFocus: true, // Refresh user data on focus
    staleTime: 5 * 60 * 1000, // Five minutes to avoid too frequent refetching
    ...opts,
  });
  return { user, refetch, isLoading, ...rest };
};

export default useUser;