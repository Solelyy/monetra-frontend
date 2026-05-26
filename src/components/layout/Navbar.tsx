import { Link } from "react-router-dom";
import Avatar from "../shared/Avatar";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

type Props = {
  isLandingPage?: boolean;
};

export default function Navbar({ isLandingPage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="relative bg-white backdrop-blur-md flex items-center py-4 px-6 justify-between h-16 w-full shadow-sm">
        <Link to="/">
          <img src="/logo.svg" alt="website's logo" className="h-10 w-auto" />
        </Link>

        {!isLandingPage && <Avatar />}

        {isLandingPage && (
          <>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4">
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
                <Button
                  size="lg"
                  className="px-6 text-base bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-800" />
              ) : (
                <Menu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isLandingPage && isMenuOpen && (
        <div className="md:hidden absolute top-15 right-6 z-50">
          <div className="w-56 rounded-xl border border-emerald-100 bg-white/95 backdrop-blur-xl shadow-xl p-3 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-2">
              <Link to="/login" onClick={closeMenu}>
                <Button
                  variant="ghost"
                  className="w-full justify-center h-11 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 border border-emerald-700"
                >
                  Log In
                </Button>
              </Link>

              <Link to="/signup" onClick={closeMenu}>
                <Button className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md">
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
