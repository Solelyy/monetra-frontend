import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../api/getCurrentUserApi";

export function useCurrentUser(enabled: true) {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: getCurrentUserApi,
    retry: false,
    enabled,
    refetchOnWindowFocus: false, //when user switch tab
    staleTime: Infinity,
  });
}
