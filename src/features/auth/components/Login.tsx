import Navbar from "@/components/layout/Navbar";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="m-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex flex-col p-6 space-y-6">
        <LoginForm />
      </main>
    </div>
  );
}
