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
import { useForm } from "react-hook-form";
import { isError, handleErrorToast } from "@/lib/utils";
import { z } from "zod";
import { SendHorizontal } from "lucide-react";
import { ButtonLink } from "@/components/shared";
import { UserDetails } from "@/types/types";

interface UserSettingsFormProps {
  user: UserDetails | undefined;
}

export const UserSettingsForm = ({ user }: UserSettingsFormProps) => {
  const form = useForm({
    // resolver: zodResolver(settingsSchema),
    defaultValues: {
      username: user?.username ?? "",
      email: user?.email ?? "",
      phone_number: "",
      address: "",
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
        className="px-5 mt-12 mb-12"
      >
        <div className="grid-cols-2 sm:grid sm:gap-4">
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
                <FormLabel>Email </FormLabel>
                <FormControl>
                  <Input
                    placeholder="martin@gmail.com"
                    type="email"
                    {...field}
                    className={`${
                      isError(field?.name, errors, form)
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid-cols-2 sm:grid sm:gap-4">
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
                        : "border-green600"
                    }`}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <ButtonLink
          type="submit"
          className="w-full mt-4"
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
