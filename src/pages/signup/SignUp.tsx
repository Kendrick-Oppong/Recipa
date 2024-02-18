import { zodResolver } from "@hookform/resolvers/zod";
import { FieldError, useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { signUpSchema } from "@/validators/formSchema";
import { Asterisk } from "lucide-react";
import { ButtonLink } from "@/components/ui/shared";
import { Link } from "react-router-dom";

// import { toast } from "@/components/ui/use-toast";

export const SignUp = () => {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const { control, handleSubmit, formState } = form;

  const isError = (fieldName: string) => {
    const error = formState.errors[
      fieldName as keyof typeof form.formState.defaultValues
    ] as FieldError | undefined;
    return error?.message;
  };

  function onSubmit(data: z.infer<typeof signUpSchema>) {
    console.log(data);
  }

  return (
    <main className="max-w-5xl mx-auto text-lg">
      <div className="border border-green-600 w-[90%] md:w-[70%] px-5  md:px-10  pb-10 rounded-lg mx-auto mt-28 mb-10 shadow-2xl">
        <div className="text-center ">
          <h2>
            Create an {""}
            <span>
              account.
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
            It&apos;s easy, just take a minute and provide the details
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Username
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      placeholder="Enter your username"
                      type="text"
                      {...field}
                      className={`${
                        isError(field.name)
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-green-600"
                      }`}
                    />
                  </FormControl>
                  <FormDescription>
                    This will be your public display name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      type="text"
                      {...field}
                      className={`${
                        isError(field.name)
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      {...field}
                      className={`${
                        isError(field.name)
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
                    Password
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className={`form-field-bg ${
                        isError(field.name)
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
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="confirm your password"
                      type="password"
                      {...field}
                      className={`form-field-bg ${
                        isError(field.name)
                          ? "border-red-500 focus-visible:ring-red-500"
                          : "border-green-600"
                      }`}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ButtonLink className="w-full mt-4">Create account</ButtonLink>
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
            Continue with Google
          </ButtonLink>
          <ButtonLink className="w-full my-4">
            <img src="/facebook.svg" alt="" className="mr-2" />
            Continue with Facebook
          </ButtonLink>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-green underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
};
