import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/validators/formSchema";
import { Asterisk, Eye, EyeOff } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { Link, useNavigate } from "react-router-dom";
import { isError, handleErrorToast } from "@/lib/utils";
import { usePageTitle, usePost as useSignIn } from "@/hooks";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { storeAuthValue } from "@/redux/userAuthenticatedSlice";

export const SignIn = () => {
  const [revealPassword, setRevealPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  usePageTitle("Sign In");
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  const {
    error: signInError,
    isError: isPostError,
    isPending,
    isSuccess,
    mutate: signInMutation,
  } = useSignIn("http://localhost:5000/user/signin");

  if (isPostError) console.log(signInError?.message);
  
  function onSubmit(data: z.infer<typeof signInSchema>) {
    signInMutation(data);
    dispatch(storeAuthValue(true));
    !isSuccess && navigate("/profile");
  }

  return (
    <main className="max-w-5xl mx-auto text-lg">
      <div className="border border-green600 w-[90%] md:w-[70%] px-5  md:px-10  pb-10 rounded-lg mx-auto mt-5 mb-10 shadow-2xl">
        <div className="text-center ">
          <h2>
            Sign to {""}
            <span>
              your account.{""}
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <li className="flex items-center justify-center sm:text-lg">
            <svg
              className="hidden sm:inline-grid flex-shrink-0 w-4 h-4 text-green-500 me-2 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Sign in and enjoy exclusive offers.
          </li>
        </div>
        <Form {...form}>
          <form
            autoComplete="fff"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4"
          >
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                    <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className={`${
                        isError(field.name, errors, form)
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-green600"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="relative">
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Password{" "}
                      <Asterisk className="inline-flex w-4 h-4 text-red-600" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type={revealPassword ? "text" : "password"}
                        {...field}
                        className={`${
                          isError(field.name, errors, form)
                            ? "border-red-500 focus-visible:ring-red-500"
                            : "border-green600"
                        }`}
                      />
                    </FormControl>
                    <div onClick={() => setRevealPassword((prev) => !prev)}>
                      {field.value.length > 0 &&
                        (revealPassword ? (
                          <EyeOff
                            strokeWidth={1}
                            className="absolute top-[44px] right-[1%]"
                          />
                        ) : (
                          <Eye
                            strokeWidth={1}
                            className="absolute top-[44px] right-[1%]"
                          />
                        ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <ButtonLink
              className="w-full mt-4"
              type="submit"
              onClick={() => handleErrorToast(isValid || isPostError)}
            >
              {isPending ? "Validating" : "Sign In"}
            </ButtonLink>
          </form>
        </Form>
        <div className="mt-6">
          <p className="inline-flex items-center justify-center w-full gap-4 mb-6 overflow-hidden text-center">
            <Separator className="w-1/2" />
            OR
            <Separator className="w-1/2" />
          </p>
          <ButtonLink className="w-full">
            <img src="/google.svg" alt="" className="mr-2" />
            {""}
            Continue with Google
          </ButtonLink>
        </div>
        <p className="text-center mt-3">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline text-green ml-1">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};
