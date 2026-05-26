import { useQuery } from "@tanstack/react-query";
import { getCurrentUserApi } from "../api/getCurrentUserApi";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["auth-user"],
    queryFn: () => {
      return getCurrentUserApi();
    },
    retry: 1,
    refetchOnWindowFocus: false, //when user switch tab
    staleTime: Infinity,
  });
}
