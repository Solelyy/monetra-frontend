import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transferApi } from "./tranferApi";

export function useTransferMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: transferApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["account-details"] });
    },
  });
}
