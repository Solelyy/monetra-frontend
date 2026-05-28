import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../api/loginApi";

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-user"] });
    },
  });
}
