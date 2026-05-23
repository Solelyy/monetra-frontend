import Avatar from "../shared/Avatar";

export default function Navbar() {
  return (
    <div className="bg-white backdrop-blur-md flex items-center py-4 px-6 justify-between h-16 w-full shadow-sm">
      <img src="/logo.svg" alt="website's logo" className="h-10 w-auto" />

      <Avatar />
    </div>
  );
}
