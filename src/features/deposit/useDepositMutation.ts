import { useMutation, useQueryClient } from "@tanstack/react-query";
import { depositApi } from "./depositApi";

export function useDepositMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: depositApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account-details"] });
    },
  });
}
