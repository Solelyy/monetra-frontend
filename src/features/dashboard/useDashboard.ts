import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "./dashboardApi";

export function useDashboard() {
  return useQuery({
    queryKey: ["account-details"],
    queryFn: () => {
      return dashboardApi();
    },

    retry: 1,
    refetchOnWindowFocus: false, //when user switch tab
    staleTime: 2 * 60 * 60 * 1000, //two hours
  });
}
