import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import { Button } from "../ui/button";

type Props = {
  isLandingPage?: boolean;
};
export default function Navbar({ isLandingPage }: Props) {
  return (
    <div className="bg-white backdrop-blur-md flex items-center py-4 px-6 justify-between h-16 w-full shadow-sm">
      <Link to="/">
        <img src="/logo.svg" alt="website's logo" className="h-10 w-auto" />
      </Link>

      {!isLandingPage && <Avatar />}

      {isLandingPage && (
        <div className="flex gap-4">
          <Link to="/login">
            <Button
              variant="outline"
              size="lg"
              className="px-6 text-base border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              Log In
            </Button>
          </Link>

          <Link to="/signup">
            <Button size="lg" className="px-6 text-base hover:bg-emerald-700">
              Sign Up
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
