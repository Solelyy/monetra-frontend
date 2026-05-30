import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { FormMessage } from "@/components/ui/form-message";
import { Input } from "@/components/ui/input";
import type { LoginCredentials } from "@/lib/types/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLoginMutation } from "../hooks/useLoginMutation";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const loginMutation = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    try {
      await loginMutation.mutateAsync(data);

      setIsRedirecting(true);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <Card className="h-full w-full max-w-sm sm:max-w-md md:max-w-lg py-8 px-6 sm:py-10">
        <CardHeader>
          <CardTitle className="text-center text-lg">
            Login to Monetra
          </CardTitle>
          <CardDescription className="text-center">
            Enter your credentials below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="juandelacruz@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <FormMessage
                    variant="error"
                    message={errors.email.message}
                    className="text-left text-xs"
                  />
                )}
              </Field>

              <Field>
                <div className="flex items-center justify-center gap-4">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot Password
                  </a>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {errors.password && (
                  <FormMessage
                    variant="error"
                    message={errors.password.message}
                    className="text-left text-xs"
                  />
                )}
              </Field>

              <Field>
                <FieldDescription className="flex flex-col gap-2">
                  <Button
                    type="submit"
                    disabled={
                      isSubmitting || isRedirecting || loginMutation.isPending
                    }
                    className="w-full border rounded-md py-4"
                  >
                    {isSubmitting || isRedirecting || loginMutation.isPending
                      ? "Logging in..."
                      : "Log in"}
                  </Button>

                  <Link to="/">
                    <Button
                      variant="outline"
                      className="w-full rounded-md py-4"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
