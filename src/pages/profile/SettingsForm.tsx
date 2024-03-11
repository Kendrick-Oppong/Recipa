import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { settingsSchema } from "@/validators/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isError, handleErrorToast } from "@/lib/utils";
import { z } from "zod";
import { SendHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/shared";

export const SettingsForm = () => {
  const form = useForm<z.infer<typeof settingsSchema>>({
    resolver: zodResolver(settingsSchema),
    defaultValues: {
      username: "",
      email: "",
      phone_number: "",
      address: "",
      country: "",
      city: "",
    },
  });

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = form;

  function onSubmit(data: z.infer<typeof settingsSchema>) {
    console.log(data);
  }
  return (
    <Form {...form}>
      <form
        autoComplete="fff"
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl className="">
                  <Input
                    placeholder="Martin"
                    type="text"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input
                    placeholder="martin@gmail.com"
                    type="email"
                    {...field}
                    className={`${
                      isError(field?.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green-600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="phone_number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="+233 552199577"
                    type="tel"
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
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Jersey, USA"
                    type="text"
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
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input
                    placeholder="USA"
                    type="text"
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
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    placeholder="New Jersey"
                    type="text"
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
        </div>
        <ButtonLink
          className="w-full mt-4"
          type="submit"
          onClick={() => handleErrorToast(isValid)}
        >
          Update Settings
          <SendHorizontal className="ml-2" />
          {/* {isPending ? "Validating" : "Sign In"} */}
        </ButtonLink>
      </form>
    </Form>
  );
};
