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
import { Asterisk } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { Link } from "react-router-dom";
import { isError, handleErrorToast } from "@/lib/utils";
import { usePost } from "@/hooks";

export const SignIn = () => {
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
    data: signInData,
    error: signInError,
    isError: isPostError,
    isPending,
    isSuccess,
    mutate: signInMutation,
  } = usePost("http://localhost:5000/user/signin");

  function onSubmit(data: z.infer<typeof signInSchema>) {
    console.log(data);
    signInMutation(data);
  }

  return (
    <main className="max-w-5xl mx-auto text-lg">
      <div className="border border-green-600 w-[90%] md:w-[70%] px-5  md:px-10  pb-10 rounded-lg mx-auto mt-28 mb-10 shadow-2xl">
        <div className="text-center ">
          {signInData?.data}
          {signInError?.message}
          <h2>
            Sign to {""}
            <span>
              your account.{""}
              <img src="/twirl-layered.svg" alt="" width={30} height={30} />
            </span>
          </h2>
          <li className="flex items-center justify-center sm:text-lg">
            <svg
              className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            Sign to and enjoy exclusive offers.
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
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className={`${
                        isError(field.name, errors, form)
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-green-600"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className={`${
                        isError(field.name, errors, form)
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-green-600"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          <p className="text-center mb-6 inline-flex justify-center items-center w-full overflow-hidden gap-4">
            <Separator className="w-1/2" />
            OR
            <Separator className="w-1/2" />
          </p>
          <ButtonLink className="w-full">
            <img src="/google.svg" alt="" className="mr-2" />
            {""}
            Continue with Google
          </ButtonLink>
          <ButtonLink className="w-full my-4">
            <img src="/facebook.svg" alt="" className="mr-2" />
            {""}
            Continue with Facebook
          </ButtonLink>
        </div>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-green underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};
