import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutApi } from "../api/logoutApi";

export function useLogoutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutApi,

    onSuccess: async () => {
      await queryClient.cancelQueries({ queryKey: ["auth-user"] });
      queryClient.removeQueries({ queryKey: ["auth-user"] });
    },
  });
}
