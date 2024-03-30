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
import { Input } from "@/components/ui/input";
import { checkOutSchema } from "@/validators/formSchema";
import { Asterisk, PackageCheck } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { isError, handleErrorToast } from "@/lib/utils";

export const CheckOutForm = () => {
  const form = useForm<z.infer<typeof checkOutSchema>>({
    resolver: zodResolver(checkOutSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      town: "",
      city: "",
      address: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  function onSubmit(data: z.infer<typeof checkOutSchema>) {
    console.log(data);
  }

  return (
    <div className="max-w-6xl mx-auto text-lg">
      <div className="border border-green600 md:w-[90%] px-5 md:px-10  pb-10 rounded-lg mx-auto mb-10 shadow-2xl">
        <Form {...form}>
          <form
            autoComplete="fff"
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4"
          >
            <FormField
              control={control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      placeholder="Enter full name"
                      type="text"
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
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
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
            <FormField
              control={control}
              name="phone_number"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone number{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+233 552199577"
                      type="tel"
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
            <FormField
              control={control}
              name="town"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Town{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Town"
                      type="text"
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
            <FormField
              control={control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    City{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="City"
                      type="text"
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
            />{" "}
            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Address{" "}
                    <Asterisk className="w-4 h-4 inline-flex text-red-600" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="New Jersey, USA"
                      type="text"
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
            <ButtonLink
              className="w-full mt-4"
              type="submit"
              onClick={() => handleErrorToast(isValid)}
            >
              Place order <PackageCheck className="ml-2" />
              {/* {isPending ? "Validating" : "Sign In"} */}
            </ButtonLink>
          </form>
        </Form>
      </div>
    </div>
  );
};
