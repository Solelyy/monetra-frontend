import { UserRound, LogOut, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";
import { useLogoutMutation } from "@/features/auth/hooks/useLogoutMutation";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Avatar() {
  const { data: user } = useCurrentUser(true);
  const logoutMutation = useLogoutMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();

      navigate("/login", { replace: true });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to logout");
    }
  };

  const handleAccount = () => {
    // TODO: Implement account navigation/modal
    console.log("Account clicked");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border-2 p-2 rounded-full border-[#43CB82] hover:bg-[#43CB82]/10 transition-colors">
          <UserRound size={20} color="#43CB82" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-50">
        <div className="px-2 py-2.5">
          <p className="text-xs font-normal text-muted-foreground">
            Signed in as
          </p>
          <p className="text-xs font-sans text-foreground truncate">
            {user?.email || "User"}
          </p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleAccount} className="cursor-pointer">
          <User className="mr-2 size-4 text-[#43CB82]" />
          <span className="font-medium">My Account</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={handleLogout}
          variant="destructive"
          className="cursor-pointer text-red-600 focus:text-red-600"
        >
          <LogOut className="mr-2 size-4" />
          <span className="font-medium">Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
