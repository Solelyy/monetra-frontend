import { useMutation, useQueryClient } from "@tanstack/react-query";
import { withdrawApi } from "./withdrawApi";

export function useWithdrawMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: withdrawApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account-details"] });
    },
  });
}
